import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { Mutex } from 'async-mutex';

import { removeUserSession, setUserAuth } from '../redux/user/userSlice';
import CONSTANTS from '@/config';
import { RootState } from '@/redux/store';

interface RefreshResultData {
  refreshToken: {
    accessToken: string;
    refreshToken: string;
  };
}

const baseQuery = graphqlRequestBaseQuery({
  url: CONSTANTS.GRAPHQL_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.user.accessToken;
    if (token && !headers.get('Authorization')) {
      headers.set('Authorization', `Bearer ${token}`);
    } else {
      headers.delete('Authorization');
    }
    return headers;
  },
  customErrors: ({ name, response }) => {
    const errorMessage = response?.errors?.length
      ? response?.errors[0].message
      : 'NO ERROR MESSAGE';
    const code: string = response?.errors?.length
      ? (response?.errors[0]?.extensions?.code as string)
      : 'NO ERROR CODE';
    const statusCode: number = response?.errors?.length
      ? (response?.errors[0]?.extensions?.statusCode as number)
      : 0;
    return {
      name,
      message: errorMessage,
      code: code,
      statusCode: statusCode,
    };
  },
});

const mutex = new Mutex();

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.statusCode === 401) {
    const refreshToken = (api.getState() as RootState).user.refreshToken;
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      console.log('Locking MUTEX');

      try {
        // Attempt to refresh the access token
        const refreshResult = await baseQuery(
          {
            document: `
        mutation RefreshToken($refreshToken: String!) {
          refreshToken(refreshToken: $refreshToken) {
            accessToken
            refreshToken
          }
        }
      `,
            variables: { refreshToken: refreshToken },
          },
          api,
          extraOptions,
        );
        if (refreshResult.data) {
          const apiResponse = refreshResult.data as RefreshResultData;
          console.log(
            'New refresh token',
            JSON.stringify(apiResponse.refreshToken),
          );
          api.dispatch(
            setUserAuth({
              accessToken: apiResponse.refreshToken.accessToken,
              refreshToken: apiResponse.refreshToken.refreshToken,
            }),
          );
          result = await baseQuery(args, api, extraOptions);
        } else {
          console.log('logging out');
          api.dispatch(removeUserSession());
        }
      } finally {
        release();
      }
    } else {
      console.log('Wating for mutex to get unlock');
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const graphql_api = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'graphql',
  refetchOnMountOrArgChange: true
});

// export const graphql_api = createApi({
//   baseQuery: graphqlRequestBaseQuery({
//     url: CONSTANTS.GRAPHQL_API_URL,
//     prepareHeaders: async (headers, {getState}) => {
//       const state = getState() as RootState;
//       const token = state.user.accessToken;
//       if (token && !headers.get('Authorization')) {
//         headers.set('Authorization', `Bearer ${token}`);
//       } else {
//         headers.delete('Authorization');
//       }
//       // if (token && endpoint === 'updateUser') {
//       //   console.log('Adding Form Token');
//       //   headers.set('apollo-require-preflight', 'true');
//       // }

//       return headers;
//     },
//     customErrors: ({name, response}) => {
//       const errorMessage = response?.errors?.length
//         ? response?.errors[0].message
//         : 'NO ERROR MESSAGE';
//       const code: string = response?.errors?.length
//         ? (response?.errors[0]?.extensions?.code as string)
//         : 'NO ERROR CODE';
//       const statusCode: number = response?.errors?.length
//         ? (response?.errors[0]?.extensions?.statusCode as number)
//         : 0;
//       console.log(errorMessage, code, statusCode);
//       return {
//         name,
//         message: errorMessage,
//         code: code,
//         statusCode: statusCode,
//       };
//     },
//   }),
//   endpoints: () => ({}),
//   reducerPath: 'graphql',
// });

// const graphql_apis= api.enhanceEndpoints({
//   endpoints: {
//     query: {
//       extraOptions: (builder: any) => ({
//         prepareHeaders: async (headers: Headers, {getState}: {getState: any}) => {
//           const state = getState() as RootState;
//           const token = state.user.accessToken;
//           if (token?.length && token.length > 0) {
//             console.log('Adding token to URLs');
//             headers.set('Authorization', `Bearer ${token}`);
//           }
//           console.log('Header:',headers.get('Authorization'))
//           return headers;
//         },
//       }),
//     },
//   },
// });

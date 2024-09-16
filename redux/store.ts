import { graphql_api } from '@/api/graphql-api-base';
import {
  configureStore
} from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    [graphql_api.reducerPath]: graphql_api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false })
      // .concat(rest_api.middleware) // use rest_api.middleware
      .concat(graphql_api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

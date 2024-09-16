import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../api/hooks/graphql/generated';
import { store } from '../redux/store';
import {
  setUserAccessToken,
  setUserEmail,
  setUserFirstName,
  setUserId,
  serUserLastName,
  setUserRefreshToken,
} from '../redux/user/userSlice';
import { LOCAL_STORAGE_KEYS } from '@/constants/local-storage-keys';

interface UserState {
  accessToken: string;
  refreshToken: string;
  email: string | undefined | null;
  first_name: string | undefined | null;
  last_name: string | undefined | null;
  phone: number | undefined | null;
  userId?: string | undefined | null;
}

const setUserSession = async ({
  first_name,
  last_name,
  phone,
  email,
  accessToken,
  refreshToken,
  userId,
}: UserState) => {
  store.dispatch(setUserFirstName(first_name ?? ''));
  store.dispatch(serUserLastName(last_name ?? ''));
  store.dispatch(setUserEmail(email ?? ''));
  store.dispatch(setUserAccessToken(accessToken));
  store.dispatch(setUserId(userId));
  store.dispatch(setUserRefreshToken(refreshToken));
  store.dispatch(api.util.resetApiState());
  const user = store.getState().user;
  await AsyncStorage.setItem(
    LOCAL_STORAGE_KEYS.user,
    JSON.stringify({
      user,
    }),
  );
};

const setUserSessionToStroage = async () => {
  const user = store.getState().user;
  return await AsyncStorage.setItem(
    LOCAL_STORAGE_KEYS.user,
    JSON.stringify({
      user,
    }),
  );
};

export { setUserSession, setUserSessionToStroage };

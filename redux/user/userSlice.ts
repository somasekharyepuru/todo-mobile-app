import { LOCAL_STORAGE_KEYS } from '@/constants/local-storage-keys';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
export interface UserState {
  refreshToken: string | undefined;
  accessToken: string | undefined;
  email: string;
  first_name: string;
  last_name: string;
  id: string
}

const initialState: UserState = {
  refreshToken: '',
  accessToken: '',
  email: '',
  first_name: '',
  last_name: '',
  id: ''
};

export const loadUserSession = createAsyncThunk(
  'user/loadUserSession',
  async () => {
    const value = await AsyncStorage.getItem(LOCAL_STORAGE_KEYS.user);
    const res = value ? JSON.parse(value)?.user : initialState;
    return res;
  },
);

export const removeUserSession = createAsyncThunk(
  'user/removeUserSession',
  async () => {
    // get the user state from the store
    if (AsyncStorage.getItem(LOCAL_STORAGE_KEYS.user) === null)
      return initialState;
    const value = await AsyncStorage.removeItem(LOCAL_STORAGE_KEYS.user);
    console.log('User is removed', value);
    return initialState;
  },
);


export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (
      state,
      action: PayloadAction<string | null | undefined>,
    ) => {
      state.id = action.payload || ''
    },
    setUserFirstName: (
      state,
      action: PayloadAction<string | null | undefined>,
    ) => {
      state.first_name = action.payload || '';
    },
    serUserLastName: (
      state,
      action: PayloadAction<string | null | undefined>,
    ) => {
      state.last_name = action.payload || '';
    },
    setUserEmail: (state, action: PayloadAction<string | null | undefined>) => {
      state.email = action.payload || '';
    },
    setUserAuth: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>,
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      AsyncStorage.setItem(
        LOCAL_STORAGE_KEYS.user,
        JSON.stringify({ user: state }),
      );
    },
    setUserAccessToken: (
      state,
      action: PayloadAction<string | null | undefined>,
    ) => {
      state.accessToken = action.payload || '';
    },

    setUserRefreshToken: (
      state,
      action: PayloadAction<string | null | undefined>,
    ) => {
      state.refreshToken = action.payload || '';
    },
  },
});

export const {
  setUserId,
  setUserRefreshToken,
  setUserFirstName,
  serUserLastName,
  setUserEmail,
  setUserAccessToken,
  setUserAuth
} = user.actions;

export default user.reducer;

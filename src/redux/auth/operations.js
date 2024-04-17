import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestSignUp,
  requestSignIn,
  requestGetCurrentUser,
  requestLogOut,
  setToken,
  clearToken,
} from "../../services/contactsApi";

export const apiRegisterUser = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await requestSignUp(credentials);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await requestSignIn(credentials);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const store = thunkAPI.getState();
    const token = store.auth.token;

    setToken(token);
    try {
      const response = await requestGetCurrentUser();

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const store = thunkAPI.getState();
      const token = store.auth.token;
      if (!token) return false;
      return true;
    },
  }
);

export const apiLogoutUser = createAsyncThunk(
  "auth/loguot",
  async (_, thunkAPI) => {
    try {
      await requestLogOut();

      clearToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// services
const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const requestSignUp = async (formData) => {
  const { data } = await instance.post("/users/signup", formData);
  setToken(data.token);

  return data;
};

export const requestSignIn = async (formData) => {
  const { data } = await instance.post("/users/login", formData);
  setToken(data.token);

  return data;
};

export const requestGetCurrentUser = async () => {
  const { data } = await instance.get("/users/current");

  return data;
};

export const requestLogOut = async () => {
  const { data } = await instance.post("/users/logout");

  return data;
};
//--------------------------RegistrationForm--------------------------//

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      // After successful registration, add the token to the HTTP header
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//--------------------------LoginForm--------------------------//
/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      // After successful login, add the token to the HTTP header
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    // After a successful logout, remove the token from the HTTP header
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/me
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setToken(persistedToken);
      const { data } = await axios.get("/users/me");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

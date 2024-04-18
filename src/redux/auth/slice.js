import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  apiRegisterUser,
  apiLoginUser,
  apiRefreshUser,
  apiLogoutUser,
} from "./operations";
import { toast } from "react-hot-toast";

const INITIAL_STATE = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success("You have registered");
      })

      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success("You are logged in");
      })

      .addCase(apiRefreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.isError = false;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(apiRefreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isError = true;
      })

      .addCase(apiLogoutUser.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addMatcher(
        isAnyOf(
          apiRegisterUser.pending,
          apiLoginUser.pending,
          apiLogoutUser.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          apiRegisterUser.rejected,
          apiLoginUser.rejected,
          apiLogoutUser.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.isError = true;
          toast.error("Oops! Something went wrong ");
        }
      ),
});

export const authReducer = authSlice.reducer;

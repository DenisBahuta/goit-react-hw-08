// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

// // создание нового пользователя
// export const userSignUp = createAsyncThunk(
//   "users/signup",
//   async (newUser, thunkAPI) => {
//     try {
//       const response = await axios.post("/users/signup", newUser);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // Вход пользователя
// export const userLogIn = createAsyncThunk(
//   "users/login",
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.post("/users/login");
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// // Выход пользователя
// export const userLogOut = createAsyncThunk(
//   "users/logout",
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.post("/users/logout");
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// // Информация о текущем пользователе
// export const userCurrent = createAsyncThunk(
//   "users/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get("/users/current");
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

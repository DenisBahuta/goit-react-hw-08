import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestGetContacts,
  requestAddContact,
  requestDeleteContact,
  requestUpdateContact,
} from "../../services/contactsApi";

export const apiGetUserContacts = createAsyncThunk(
  "phonebook/get",
  async (_, thunkAPI) => {
    try {
      const data = await requestGetContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiAddNewUserContact = createAsyncThunk(
  "phonebook/addContact",
  async (contact, thunkAPI) => {
    try {
      const data = await requestAddContact(contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiDeleteUserContact = createAsyncThunk(
  "phonebook/deleteContact",
  async (contact, thunkAPI) => {
    try {
      const data = await requestDeleteContact(contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiUpdateUserContact = createAsyncThunk(
  "phonebook/updateContact",
  async (contact, thunkAPI) => {
    try {
      const data = await requestUpdateContact(contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

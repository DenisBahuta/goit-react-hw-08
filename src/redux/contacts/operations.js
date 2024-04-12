import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// services
const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const requestGetContacts = async () => {
  const { data } = await instance.get("/contacts");

  return data;
};

export const requestAddContact = async (formData) => {
  const { data } = await instance.post("/contacts", formData);

  return data;
};

export const requestDeleteContact = async (contactId) => {
  const { data } = await instance.delete(`/contacts/${contactId}`);

  return data;
};

// получение массива контактов
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await requestGetContacts("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// добавление нового контакта
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const { data } = await requestAddContact("/contacts", newContact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// удаление контакта по ID
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await requestDeleteContact(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

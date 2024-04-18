import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  apiGetUserContacts,
  apiAddNewUserContact,
  apiDeleteUserContact,
  apiUpdateUserContact,
} from "./operations";
import { toast } from "react-hot-toast";
import { apiLogoutUser } from "../auth/operations";

const INITIAL_STATE = {
  contacts: [],
  isLoading: false,
  isError: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(apiGetUserContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(apiAddNewUserContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
        toast.success("Added a new contact");
      })
      .addCase(apiDeleteUserContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        );
        toast.success("Removed a contact");
      })
      .addCase(apiUpdateUserContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        );
        toast.success("Updated a contact");
      })
      .addCase(apiLogoutUser.fulfilled, (state) => {
        state.contacts = [];
        state.isLoading = false;
        state.isError = null;
      })

      .addMatcher(
        isAnyOf(
          apiGetUserContacts.pending,
          apiAddNewUserContact.pending,
          apiDeleteUserContact.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          apiGetUserContacts.rejected,
          apiAddNewUserContact.rejected,
          apiDeleteUserContact.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.isError = true;
          toast.error("Oops! Something went wrong ");
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;

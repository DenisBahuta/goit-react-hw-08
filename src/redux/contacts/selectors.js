import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectPhonebook = (state) => state.phonebook.contacts;
export const selectIsLoading = (state) => state.phonebook.isLoading;
export const selectIsError = (state) => state.phonebook.isError;

export const selectVisibleContacts = createSelector(
  [selectPhonebook, selectNameFilter],
  (contacts, filter) => {
    if (filter && filter.trim() !== "") {
      return contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.number.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  }
);

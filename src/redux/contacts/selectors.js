import { createSelector } from "@reduxjs/toolkit";

export const selectAllContacts = state => state.contacts.items;

export const selectLoading = state => state.contacts.loading;

export const selectFilter = state => state.filters;

export const selectVisibleContacts = createSelector(
  [selectAllContacts, selectFilter],
  (contacts, filter) => {
    return (contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    ));
  }
);

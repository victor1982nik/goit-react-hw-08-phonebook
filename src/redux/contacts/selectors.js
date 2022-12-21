import { createSelector } from "@reduxjs/toolkit";

export const selectItems = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector([selectFilter,selectItems], (filter,contacts) => {
    
  if (filter === '') 
    return contacts;
    
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)
  );
});
  
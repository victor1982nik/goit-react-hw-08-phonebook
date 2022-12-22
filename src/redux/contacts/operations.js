import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_,{rejectWithValue}) => {
    try{
      const contacts = await API.fetchContacts();
      return contacts;
    }catch(e) {
      return rejectWithValue(e);
    }
  }
)

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactToAdd, thunkAPI) => {
    try {      
      const contact = await API.addContact(contactToAdd);      
      return contact;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (idToDelete, thunkAPI) => {
    try {
      const contact = await API.deleteContact(idToDelete);
      return contact;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
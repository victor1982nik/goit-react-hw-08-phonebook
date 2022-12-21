import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice"; 
import { contactsReducer } from './contacts/contactsSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { authReducer } from "./auth/authSlice";
import {
   persistStore,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist'; 


 const persistConfig = {
   key: 'root',
   storage,  
   whitelist: ['token'],
} 

export const store = configureStore({
  reducer: {  
    contacts: contactsReducer,    
    auth: persistReducer(persistConfig, authReducer),
    filter: filterReducer,    
  },   
  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
       serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
       },
     }),
});

export const persistor = persistStore(store);
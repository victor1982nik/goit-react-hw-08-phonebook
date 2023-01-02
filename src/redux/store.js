import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice"; 
//import { contactsReducer } from './contacts-old/contactsSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { authReducer } from "./auth/authSlice";
import { contactsApi } from "./contacts/contactsSlice";
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
   key: 'auth',
   storage,  
   whitelist: ['token'],
} 

export const store = configureStore({
  reducer: {  
    //contacts: contactsReducer, 
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: persistReducer(persistConfig, authReducer),
    filter: filterReducer,    
  },   
  middleware: (getDefaultMiddleware) =>[
     ...getDefaultMiddleware({
       serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
       },
     }),contactsApi.middleware,]
});

export const persistor = persistStore(store);
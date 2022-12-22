import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, setAuthHeader, clearAuthHeader, logInUser, logOutUser, refreshUser } from "api/authApi";

export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
    try {        
        const data = await registerUser(credentials);        
        //console.log(data);
        setAuthHeader(data.token);
        return data;
    } catch(error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logIn = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
    try {        
        const data = await logInUser(credentials);        
        //console.log(data);
        setAuthHeader(data.token);
        return data;
    } catch(error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logOut = createAsyncThunk("auth/logout", async (_,thunkAPI) => {
    try {        
        const data = await logOutUser();        
        //console.log(data);
        clearAuthHeader();
        return data;
    } catch(error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const refreshCurrentUser = createAsyncThunk("auth/refresh", async (_,thunkAPI) => {          
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) {
            return thunkAPI.rejectWithValue("Token invalid");
            //return state;
        }
        setAuthHeader(persistedToken);
     try {     
        const data = await refreshUser();        
        //console.log(data);
        //setAuthHeader(data.token);
        return data;
    } catch(error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})
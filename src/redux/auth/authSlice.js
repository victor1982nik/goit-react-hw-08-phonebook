import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authOperations";


const initialState = {
    user: { name: null, email: null},
    isLoggedIn: false,
    token: null,
} 

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.user = action.payload
        }
    },
});

export const authReducer = authSlice.reducer;
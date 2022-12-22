import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshCurrentUser } from "./authOperations";

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
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logIn.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logOut.fulfilled]: (state) => {
            state.user = { name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
        },
        [refreshCurrentUser.fulfilled]: (state, action) => {
            //console.log(action.payload);
            state.user = action.payload;            
            state.isLoggedIn = true;
        },
    },
});

export const authReducer = authSlice.reducer;
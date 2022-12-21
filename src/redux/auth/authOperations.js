import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser } from "api/userAuthApi";

export const register = createAsyncThunk("auth/register", async credentials => {
    try {
        const data = await registerUser(credentials);
        console.log(data);
        return data;
    } catch(e) {}
})
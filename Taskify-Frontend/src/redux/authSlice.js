import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const baseUrl = "http://localhost:2000/user"

const initialState = {
    user: null,
    status: "idle",
    error: null
}

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseUrl}/register`, userData, { withCredentials: true })
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseUrl}/login`, userData, { withCredentials: true })
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseUrl}/logout`, { withCredentials: true })
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${baseUrl}/getCurrentUser`, { withCredentials: true })
            return response.data.result
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.status = 'success'
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.error = action.payload,
                    state.status = 'failed'
            })
            .addCase(loginUser.pending, (state) => {
                state.status = "loading"
            })
            .addCase(loginUser.fulfilled, (state,action) => {
                state.user = action.payload
                state.status = "success"
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.payload,
                    state.status = "failed"
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.user = action.payload
            })
    }
})


export default authSlice.reducer
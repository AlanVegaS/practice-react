import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',//not-authenticated, authenticated
        userName: null
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated'
            state.userName = payload.userName
        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated',
                state.userName = null
        }
    }
});

export const { login, logout } = authSlice.actions;
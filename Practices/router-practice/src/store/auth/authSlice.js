import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',//not-authenticated, authenticated
        userName: null
    },
    reducers: {
        login: (state, { payload }) => {
            console.log(payload.userName);
            state.status = 'authenticated'
            state.userName = payload.userName
        },
        logout: (state) => {
            state.status = 'not-authenticated',
                state.userName = null
        }
    }
});

export const { login, logout } = authSlice.actions;
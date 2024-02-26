import React, { useReducer } from 'react'
import { AuthContext } from './authConext'
import { authReducer } from './authReducer'
import { types } from '../types/types'


const initialState = {
    logged: false
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    return {
        logged : !!user,
        user: user
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispacth] = useReducer(authReducer, {}, init)
    const login = (name = '') => {
        const user = { id: 'ABC', name}
        const action = {
            type: types.login,
            payload: user
        }
        dispacth(action)
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            login: login
        }}>
            {children}
        </AuthContext.Provider>
    )
}

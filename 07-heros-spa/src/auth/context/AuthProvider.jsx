import React, { useReducer } from 'react'
import { authReducer, AuthContext } from './'
import { types } from '../types/types'

const initialState = {
    logged: false
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispacth] = useReducer(authReducer, {}, init)
    const login = (name = '') => {
        const user = { id: 'ABC', name }
        const action = {
            type: types.login,
            payload: user
        }
        localStorage.setItem('user', JSON.stringify(user))
        dispacth(action)
    }

    const logout = () => {
        localStorage.removeItem('user')
        const action = {
            type: types.logout
        }
        dispacth(action)
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            //methods
            login: login,
            logout: logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

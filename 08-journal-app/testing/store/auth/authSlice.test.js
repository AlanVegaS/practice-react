import { authSlice, login, logout, checkingCredential } from "../../../src/store/auth/authSlice"
import { demoUser, initialState } from "../../fixtures/authFixtures"


describe('Testing authSlice', () => {
    test('should return initial state and called "auth"', () => {

        const state = authSlice.reducer(initialState, {})

        expect(state).toEqual(initialState)
        expect(authSlice.name).toBe('auth')
    })

    test('should login', () => {

        const state = authSlice.reducer(initialState, login(demoUser));
        expect(state).toEqual({
            status: 'authenticated',
            uid: '123abc',
            email: 'demo@gmail.com',
            displayName: 'Demo User',
            photoURL: 'https://demo.jpg',
            errorMessage: null
        })
    })

    test('should logout with argumnets', () => {

        const errorMessage = 'invalid credentials'
        const state = authSlice.reducer(initialState, logout({ errorMessage }));
        console.log(state);
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage
        })
    })

    test('should logout without argumnets', () => {

        const state = authSlice.reducer(initialState, logout());
        console.log(state);
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        })
    })

    test('should change to "checking" status', () => { 
        
        const state = authSlice.reducer(initialState, checkingCredential());
        expect(state.status).toBe('checking')
     })
})


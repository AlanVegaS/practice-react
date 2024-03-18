import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"

describe('Pruebas en authReducer', () => {

    const initialState = [{
        logged: '-false'
    }]

    test('Debe regresar el initial state', () => {
        const newState = authReducer(initialState, {})
        expect(newState).toBe(initialState)
    })

    test('Debe iniciar sesion', () => {
        const action = {
            type: types.login,
            payload: {
                id: 1,
                name: 'Alan Vega'
            }
        }

        const newState = authReducer(initialState, action)
        expect(newState.logged).toBeTruthy()
        expect(newState.user).toEqual(action.payload)
    })

    test('Debe cerrar sesion', () => { 
        const actionLLogin = {
            type: types.login,
            payload: {
                id: 1,
                name: 'Alan Vega'
            }
        }
        const actionLogout =  {
            type: types.logout
        }
        let newState = authReducer(initialState, actionLLogin)
        newState = authReducer(initialState, actionLogout)

        expect(newState.logged).toBeFalsy()
        console.log('newState '+JSON.stringify(newState));
      })
})
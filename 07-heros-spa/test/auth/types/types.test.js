import { types } from "../../../src/auth/types/types"

describe('Validar types', () => {
    test('Debe regresar los siguientes types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
    })
})
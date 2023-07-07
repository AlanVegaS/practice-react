import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Prueba 02 template string', () => { 
    test('Probando getSaludo', () => {
        const name = 'Alan'
        const message = getSaludo( name )
        expect( message ).toBe( `Hola ${ name }` );
    });
 })
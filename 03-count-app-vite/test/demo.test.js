describe('Demo component', () => { 
    test('Esta es una prueba y no debe de fallar', () => {
        //1 inicializacion
        const message1 = 'Hola Mundo'
        //2 estimulo
        const message2 = message1.trim()
        //3 observar el comportamiento
        expect( message1 ).toBe( message2 )
    }) 
})
import { render, screen } from '@testing-library/react'
import { AuthContext } from "../../../src/auth/"
import { PublicRouter } from "../../../src/router/PublicRouter"
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'

describe('Validar <PublicRouter/>', () => {
    test('Debe mostrar el children  si no esta autenticado', () => {
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>//se necesita el contexto
                <PublicRouter>
                    <h1>Ruta publica</h1>
                </PublicRouter>
            </AuthContext.Provider>
        )

        //screen.debug()
        expect(screen.getByText('Ruta publica')).toBeTruthy()
    })

    test('Debe  navegar si esta autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Strider',
                id: '123',
            },
        }

        const router = createBrowserRouter([
            {
                path: '/login',
                element: (
                    <PublicRouter>
                        <h1>Usuario no logeado</h1>
                    </PublicRouter>
                ),
            },
            {
                path: '/',
                element: <h1>MarvelPage</h1>,
            },
        ])


        render(
            <AuthContext.Provider value={contextValue}>
                <RouterProvider router={router} />
            </AuthContext.Provider>
        )

        screen.debug()
        expect(screen.getByText('MarvelPage')).toBeTruthy()
    })
})
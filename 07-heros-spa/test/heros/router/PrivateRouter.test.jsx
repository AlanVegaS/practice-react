import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../../src/auth"
import { PrivateRouter } from "../../../src/router/PrivateRouter"
import { MemoryRouter, RouterProvider, createBrowserRouter } from "react-router-dom"

describe('Probar <PrivateRouter/>', () => {
    test('Debe mostrar marvel que es ruta privada', () => {

        //Storage.prototype.setItem = jest.fn()

        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Mingo'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/searh?=batman']}>
                    <PrivateRouter>
                        <h1>Marvel ruta privada</h1>
                    </PrivateRouter>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Marvel ruta privada')).toBeTruthy()
        //expect(localStorage.setItem).toHaveBeenCalledWith('lastPath')
    })

    /*test('Debe navegar si no está autenticado', () => {//esta prueba no la pude concluir, no logre renderizar correctamente la ruta de login
        const contextValueLogout = {
            logged: false
        };

        const router = createBrowserRouter([
            {
                path: '/',
                element: (
                    (<PrivateRouter>
                        <h1>Marvel Privado1</h1>
                    </PrivateRouter>)
                )
            },{
                path: '/login',
                element: (
                    <h1>Página de inicio de sesión</h1>
                )
            }
        ]);

        render(
            <AuthContext.Provider value={contextValueLogout}>
                <RouterProvider router={router} />
            </AuthContext.Provider>
        );
        screen.debug()
    });*/
})
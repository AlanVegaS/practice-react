import { render, screen } from "@testing-library/react"
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { Routes } from "../../../src/router/routes"
import { AuthContext } from "../../../src/auth/context";

describe('Probar <PrivateRouter/>', () => {
    test('Debe mostrar login sino esta autenticado', () => {

        const contextValue = {
            logged: false
        }

        const router = createMemoryRouter(Routes, {
            initialEntries: ["/marvel", "/login"],
            initialIndex: 1,
        })

        render(
            <AuthContext.Provider value={contextValue}>
                <RouterProvider router={router} />
            </AuthContext.Provider>
        )

        expect(screen.getAllByText('Login').length).toBe(2)
        //screen.debug()
    })

    test('Debe mostrar el componente Marvel si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Mingo'
            }
        }

        const router = createMemoryRouter(Routes, {
            initialEntries: ['/marvel', '/login'],
            initialIndex: 0
        })

        render(
            <AuthContext.Provider value={contextValue}>
                <RouterProvider router={router}/>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Marvel', {selector: 'a'})).toBeTruthy()

        screen.debug() 
    })
})
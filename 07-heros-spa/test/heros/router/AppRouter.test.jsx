import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../../src/auth"
import { PrivateRouter } from "../../../src/router/PrivateRouter"
import { createMemoryRouter } from "react-router-dom"
import { Routes } from "../../../src/router/routes"
import { createMemoryHistory } from 'history';

describe('Probar <PrivateRouter/>', () => {
    test('Debe mostrar marvel que es ruta privada', () => {

        const contextValue = {
            logged: false
        }

        const router = createMemoryHistory(Routes, {
            initialEntries:['/marvel']
        })

        render(
            
        )

    })
})
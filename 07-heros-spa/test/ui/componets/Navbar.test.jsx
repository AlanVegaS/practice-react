import { fireEvent, render, screen } from '@testing-library/react'
import { AuthContext } from "../../../src/auth"
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { Navbar } from '../../../src/ui'

const mockedUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({//Se hace mock para el useNavigate
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Pruebas en <Navbar/>', () => {

    const contextValue = {
        logged: true,
        user: {
            id: 'a1',
            name: 'Mingo'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks())

    test('Debe mostrar el nombre del usuario', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        const logoutButton = screen.getByText('Logout')
        fireEvent.click(logoutButton)
        expect(screen.getByText(contextValue.user.name, { selector: 'span' }))
    })

    test('Debe de llamar el logout y navigate cuando se hace click en el boton', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        const logoutButton = screen.getByText('Logout')
        fireEvent.click(logoutButton)
        expect(contextValue.logout).toHaveBeenCalledTimes(1)
        expect(mockedUseNavigate).toHaveBeenCalledTimes(1)
    })

    /*test('Debe de llamar el logout y navigate cuando se hace click en el boton segunda opcion y mejor', () => {
        

        const navigateMock = jest.fn();
        useNavigate.mockReturnValueOnce(navigateMock); 
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutButton = screen.getByText('Logout')
        fireEvent.click(logoutButton)
        
        expect(navigateMock).toHaveBeenCalledWith('/login', {"replace": true});
    })*/
})
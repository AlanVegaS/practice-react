import React from "react";
import { LoginPage } from "../../src/09-useContext/LoginPage"
import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en <LoginPage/>', () => {

    test('debe de mostrar el componente sin el usuario', () => {
        render(<UserContext.Provider value={{user: null}}>
                    <LoginPage/>
                </UserContext.Provider>
        )
        //fireEvent.click(setUserButton)
        const preElement = screen.getByLabelText('pre')
        expect(preElement.innerHTML).toBe('null')
    })

    test('debe de llamar setUser cuando se hace click en el boton', () => {

        const user = {
            id: 1,
            name: 'Alan'
        }
        const setUserMock = jest.fn();

        render(<UserContext.Provider value={{user: user, setUser: setUserMock}}>
                    <LoginPage/>
                </UserContext.Provider>
                )
        const setUserButton = screen.getByRole('button')
        fireEvent.click(setUserButton)
        expect(setUserMock).toHaveBeenCalledTimes(1)
        expect(setUserMock).toHaveBeenCalledWith({id: 123, name:'Alan Vega', email:'alan.vega@outlook.es'})
    })
})
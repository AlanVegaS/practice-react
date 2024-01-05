import React from "react";
import {render, screen} from '@testing-library/react'
import { HomePage } from "../../src/09-useContext/HomePage"
import { UserContext } from "../../src/09-useContext/context/UserContext"

describe('Pruebas en <HomePage/>', () => {

    const user = {
        id:1,
        name:'Alan'
    }

    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null}}>
                <HomePage/>
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        console.log(preTag.innerHTML);
        expect(preTag.innerHTML).toBe('null')
    })

    test('Debe de mostrar el componente con el nombre del usuario', () => {
        render(
            <UserContext.Provider value={{user}}>
                <HomePage/>
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        console.log('nombre: ' + preTag.innerHTML);
        expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3))
    })
})
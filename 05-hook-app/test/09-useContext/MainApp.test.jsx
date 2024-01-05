import React from 'react'
import { render, screen } from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import { MainApp } from '../../src/09-useContext/MainApp'


describe('Pruebas en <MainPage/>', () => {
    test('Debe de mostrar el homePage', () => {
        render(<MemoryRouter>
                    <MainApp/>
                </MemoryRouter>)
        //screen.debug()
        expect(screen.getByText('HomePage')).toBeTruthy()
    })

    test('Debe de mostrar el loginPage', () => {
        render(<MemoryRouter initialEntries = {['/login']}>
                    <MainApp/>
                </MemoryRouter>)
        screen.debug()
        expect(screen.getByText('LoginPage')).toBeTruthy()
    })
}) 
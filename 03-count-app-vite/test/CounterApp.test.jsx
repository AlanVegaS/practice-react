import { render,screen,fireEvent } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp";

describe('Probando CounterApp.jsx', () => {
    const value = 100
    test('Probando que haga match el snapshot', () => { 
        const {container} = render(<CounterApp value={value}/>)
        expect(container).toMatchSnapshot()
     })
     test('Debe de mostrar el value ' + value, () => {
        render(<CounterApp value={value} />)
        screen.debug()
        expect(screen.getByText(value)).toBeTruthy()
    })
    test('Debe incrementar el value con el boton +1', () => { 
        render(<CounterApp value={value} />)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText(value+1)).toBeTruthy()
     })
     test('Debe funcionar el boton reset', () => { 
        render(<CounterApp value={value} />)
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
        expect(screen.getByText(value)).toBeTruthy()

     })
     test('Debe decrementar el value con el boton -1', () => { 
        render(<CounterApp value={value} />)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText(value-1)).toBeTruthy()
     })
});
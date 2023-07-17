import { getAllByText, getByText, render } from "@testing-library/react"
import { ComponentName } from "../src/FirstComponent"

describe('Pruebas en FirstComponent', () => { 
    /*test('Debe de hacer match con el snapshot', () => { 
        const title = 'Hola soy titulo'
        const {container} = render(<ComponentName tittle = {title} subtittle = "Soy sub"/>)

        expect(container).toMatchSnapshot()
     })*/
     test('Debe mostrar el titulo en un H1', () => { 
        const title = 'Hola soy titulo'
        const {container, getByText, getByTestId} = render(<ComponentName tittle = {title} subtittle = "Soy sub"/>)
        expect(getByText(title)).toBeTruthy()
        
        const h1 = container.querySelector('h1')
        //expect(h1.innerHTML).toBe(title);
        expect(h1.innerHTML).toContain(title);
        expect(getByTestId('test-title').innerHTML).toBe(title)
    })
    test('Debe mostrar el subtitulo enviado por props', () => { 
        const title = 'Hola soy titulo'
        const subtitle = 'Sub'
        const {getAllByText} = render(<ComponentName tittle = {title} subtittle = {subtitle}/>)

        expect(getAllByText(subtitle).length).toBe(2) 
    })
 })
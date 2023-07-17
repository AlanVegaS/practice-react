import { render, screen } from "@testing-library/react"
import { ComponentName } from "../src/FirstComponent"

describe('Pruebas en FirstComponent', () => {
    const title = 'Hola, soy titulo'
    const sub = 'Hola, soy sub'

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<ComponentName tittle={title}/>)
        expect(container).toMatchSnapshot()
    })
    test('Debe de mostrar el titulo ' + title, () => {
        render(<ComponentName tittle={title} />)
        screen.debug()
        expect(screen.getByText(title)).toBeTruthy()
    })
    test('Debe de mostrar el titulo en un H1', () => {
        render(<ComponentName tittle={title}/>)
        expect(screen.getByRole('heading', {level:1}).innerHTML).toContain(title)
    })
    test('Debe de mostrar el subtitulo en un H2', () => {
        render(<ComponentName tittle={title} subtittle={sub}/>)
        expect(screen.getAllByText(sub).length).toBe(2)
    })
})
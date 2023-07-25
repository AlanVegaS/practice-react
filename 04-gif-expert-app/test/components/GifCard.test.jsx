import { render, screen } from '@testing-library/react'
import { GifCard } from "../../src/components/GifCard";

describe('Pruebas en GifCard', () => {
    const title = 'Hola'
    const url = 'http://localhost/url'
    test('Debe hacer match con el snap', () => {
        const { container } = render(<GifCard title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })

    test('Debe tner alt y url', () => {
        render(<GifCard title={title} url={url} />)
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })

    test('Debe mostrar el titulo en el componente', () => {
        render(<GifCard title={title} url={url} />)
        expect(screen.getByAltText(title)).toBeTruthy()
    })
}); 
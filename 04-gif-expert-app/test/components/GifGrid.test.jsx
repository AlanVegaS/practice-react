import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/components/hooks/useFetchGifs';

jest.mock('../../src/components/hooks/useFetchGifs')

describe('Pruebas en GifGrid.jsx', () => {
    const category = 'Shark1'

    test('Debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={category} />)
        expect(screen.getByText('Loading...'))
        expect(screen.getByText(category))
    })

    test('Debe mostrar item cuando se cargan los gifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Title1',
                url: 'url1'
            }, {
                id: '123',
                title: 'Title2',
                url: 'url2'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category} />)
        expect(screen.getAllByRole('img').length).toBe(2)
    })
}); 
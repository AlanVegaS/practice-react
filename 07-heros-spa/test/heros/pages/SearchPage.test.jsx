import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Search } from '../../../src/heros/pages/Search'

const mockedUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({//Se hace mock para el useNavigate
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Testing in <PagesPage> component', () => {
    beforeEach(() => jest.clearAllMocks())
    test('Should display default values successfully.', () => {
        const { container } = render(
            <MemoryRouter>
                <Search />
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot()
    })

    test('Should display Batman result and the input field with queryStrinng.', () => {
        render(
            <MemoryRouter initialEntries={['/searh?q=batman']}>
                <Search />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        expect(input.value).toBe('batman')
    })

    test('Should display error result whith value inexistent', () => {
        render(
            <MemoryRouter initialEntries={['/searh?q=valueranndom']}>
                <Search />
            </MemoryRouter>
        )

        expect(screen.getByText('No hero whith', { selector: 'div' }))
        expect(screen.getByText('valueranndom', { selector: 'b' }))
    })

    test('Should display error result whith value inexistent', () => {
        render(
            <MemoryRouter initialEntries={['/searh']}>
                <Search />
            </MemoryRouter>
        )

        const inputField = screen.getByRole('textbox')
        fireEvent.change(inputField, { target: { value: 'batman' } });
        const form = screen.getByLabelText('form-heros')
        fireEvent.submit(form)

        expect(mockedUseNavigate).toHaveBeenCalledWith('?q=batman') 
    })
})
import {render, screen} from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en GifExpertApp.jsx', () => {
    test('Deberia mostrar el estado incial', () => {
        render(<GifExpertApp />)
        
        expect(screen.getByText('Shark')).toBeTruthy()
        expect(screen.getByText('Octopus')).toBeTruthy()
        expect(screen.getAllByText('Loading...').length).toBe(2)
    });
});
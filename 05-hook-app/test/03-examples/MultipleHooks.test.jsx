import {render, screen} from "@testing-library/react";
import {MultipleCustomHooks} from "../../src/03-examples";

describe('Pruebas en <MultipleHooks/>', ()=> {
    test('debe de mostrar el componente por defecto', () => {
        render(<MultipleCustomHooks/>);//este codigo nunca funciono

        expect(screen.getByText('Loading...'))
        expect(screen.getByText('Breaking bad quotes, quote #1'))
        const nextButton = screen.getByRole('button', {name: 'Next quote'})
        expect(nextButton.disabled).toBeTruthy()
    });
});
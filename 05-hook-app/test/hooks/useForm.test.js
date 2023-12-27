import { act, renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm'

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'Alan',
        email: 'alan.vega@outlook.es'
    }

    test('debe de regresar la informacion por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm))
        console.log(result);
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })
    })

    test('Se debe de cambiar el nombre del formulario', () => {
        const newValue = 'Eduardo'

        const { result } = renderHook(() => useForm(initialForm))
        const { onInputChange } = result.current

        act(() => {
            onInputChange({target:{ name: 'name', value: newValue }})
        })

        expect(result.current.name).toEqual(newValue)
        expect(result.current.formState.name).toEqual(newValue)
    })

    test('Se debe evaluar el reseteo del formulario', () => {
        const newValue = 'Eduardo'

        const { result } = renderHook(() => useForm(initialForm))
        const { onInputChange,onResetForm } = result.current

        act(() => {
            onInputChange({target:{ name: 'name', value: newValue }})
            onResetForm()
        })

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })
    })
})
import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {
    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setformValidation] = useState({})

    useEffect(() => {
        createValidators()//run when formState is changed

    }, [formState])

    const isFormValid = useMemo(() => {
        console.log('run use memo');
        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null) return false
        }
        return true
    }, [formValidation])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const createValidators = () => {//run  in use efect
        const formCheckValues = {}
        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage] = formValidations[formField]
            formCheckValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage
        }
        console.log('---' + JSON.stringify(formCheckValues));
        setformValidation(formCheckValues)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid
    }
}
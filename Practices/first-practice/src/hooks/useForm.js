import { useState } from "react";

export const useForm = (counter) => {

    const [count, setCount] = useState(counter);

    const OnChangeInput = () => {
        console.log('hola');
    };
    const setNewValueCounter = (newValue) => {
        //console.log(newValue);
        setCount(() => newValue)
    }

    return ({
        OnChangeInput,
        setNewValueCounter,
        count
    });
};
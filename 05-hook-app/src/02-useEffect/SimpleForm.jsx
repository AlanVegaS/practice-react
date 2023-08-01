import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Alan',
        email: 'alan.vega@outlook.es'
    })

    const {username, email} = formState
    const onInputChange = ({target}) => {
        const {name, value} = target

        setFormState({
            ...formState,
            [name]:value
        })
    }

    useEffect(()=> {
        //console.log('Use efect la primera vez de carga');
    }, [])
    useEffect(()=> {
        //console.log('Use efect en la modificacion del formulario');
    }, [formState])
    useEffect(()=> {
        //console.log('Use efect en la modificacion del email');
    }, [email])

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="UserName"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="alan.vega@outlook.es"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            {
                username === 'Alan2' && <Message/>
            }
        </>
    )
}
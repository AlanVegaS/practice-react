import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

    const { onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    })

    return (
        <>
            <h1>Formulario con custom hook</h1>
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
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>
        </>
    )
}
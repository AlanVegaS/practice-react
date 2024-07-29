import { Login, Registrer } from '../pages';
import { Navigate } from 'react-router-dom'

export const AuthRouter = [
    {
        index: true,
        path: 'login',
        element: <Login />
    }, {
        path: 'registrer',
        element: <Registrer />
    },{
        path: '*',
        element: <Navigate to={'/'} />
    }
];
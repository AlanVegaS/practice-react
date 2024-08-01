import { HomePage, Profile } from '../pages';
import { Navigate } from 'react-router-dom'

export const HomeRouter = [
    {
        index: true,
        path: '',
        element: <HomePage />
    }, {
        path: 'home',
        element: <HomePage />
    }, {
        path: 'profile',
        element: <Profile />
    },{
        path: '*',
        element: <Navigate to={'/'} />
    }
];
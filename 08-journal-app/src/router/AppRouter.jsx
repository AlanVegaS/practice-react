import { useDispatch, useSelector } from "react-redux";
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui/'
import { useCheckAuths } from "../hooks";
import { Navigate } from "react-router-dom";

export const AppRouter = () => {
    const status = useCheckAuths();

    const appRoutes = [
        {
            path: '/',
            children: JournalRoutes
        },
    ];

    const authRoutes = [
        {
            path: '/auth/*',
            children: AuthRoutes
        }, {
            path: '*',
            element: <Navigate to={'/auth/login'} />
        }
    ]

    const loadDisplay = [{
        path: '/*',
        element: <CheckingAuth />
    }];

    if (status === 'checking') return loadDisplay
    if (status === 'authenticated') return appRoutes
    return authRoutes
}
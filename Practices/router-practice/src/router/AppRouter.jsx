import { AuthRouter } from "../auth/router/AuthRouter";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { Navigate } from "react-router-dom";

export const AppRouter = () => {
    const statusAuth = useCheckAuth();

    const authRoutes = [
        {
            path: '/auth/*',
            children: AuthRouter
        }, {
            path: '*',
            element: <Navigate to={'/auth/login'} />
        }
    ];

    if (statusAuth === 'not-authenticated') return authRoutes;
    return authRoutes;
};
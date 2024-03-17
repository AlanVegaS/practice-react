import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../auth/context'

export const PublicRouter = ({ children }) => {
    const { logged } = useContext(AuthContext)

    return (!logged)
        ? children
        : <Navigate to={'/'} />
}
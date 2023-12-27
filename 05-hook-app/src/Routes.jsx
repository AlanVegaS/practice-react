import { createBrowserRouter } from "react-router-dom";
import { AboutPage, HomePage, LoginPage, MainApp, ErrorPage } from "./09-useContext";
import {MultipleCustomHooks} from './03-examples'

export const getRoutes = () => createBrowserRouter([
    {
        path: "/",
        element: <MainApp />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/home",
                element: <HomePage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/MultipleHooks",
                element: <MultipleCustomHooks/>
            }
        ]
    }
]);
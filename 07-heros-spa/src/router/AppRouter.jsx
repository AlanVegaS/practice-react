import React from 'react'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Login } from '../auth/pages';
import { HerosRoutes } from '../heros';
import { Marvel, DC, Search, Hero } from '../heros/pages';
import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <PublicRouter> <Login /> </PublicRouter>,
  },
  {
    path: '/',
    element: <PrivateRouter><HerosRoutes/></PrivateRouter>,
    children: [
      {
        path: '/',
        element: <Marvel />
      },
      {
        path: "/marvel",
        element: <Marvel />,
      },
      {
        path: "/dc",
        element: <DC />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/hero/:id",
        element: <Hero />,
      },
    ]
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

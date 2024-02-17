import React from 'react'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { Login } from '../auth/pages';
import { HerosRoutes } from '../heros';
import { Marvel, DC, Search, Hero } from '../heros/pages';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
    /*children: [
      {
        path: '/*',
        element: <Navigate to={'/marvel'} />
      }
    ]*/
  },
  {
    path: '/',
    element: <HerosRoutes />,
    children: [
      /*{
        path: '/*',
        element: <Navigate to={'/marvel'} />
      },*/
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

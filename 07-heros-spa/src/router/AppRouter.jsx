import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { HerosApp } from '../HerosApp';
import { Login } from '../pages/Login';
import { DC } from '../heros/pages/DC';
import { Marvel } from '../heros/pages/Marvel';

const router = createBrowserRouter([
    {
      path: "/",
      element: <HerosApp/>,
    },
    {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/dc",
        element: <DC/>,
      },
      {
        path: "/marvel",
        element: <Marvel/>,
      },
  ]);

export const AppRouter = () => {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

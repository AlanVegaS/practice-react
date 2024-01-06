import React from 'react'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { HerosApp } from '../HerosApp';
import { Login } from '../pages/Login';
import { DC, Marvel } from '../heros';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HerosApp />,
    children: [
      {
        path: '/',
        element: <Navigate to = {'/marvel'}/>
      },
      {
        path: "/marvel",
        element: <Marvel />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dc",
        element: <DC />,
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

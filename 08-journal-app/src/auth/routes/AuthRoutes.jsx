import React from 'react'
import { LoginPage, RegistrerPage } from '../pages'
import { Navigate } from 'react-router-dom'

export const AuthRoutes = [
  {
    index: true,
    path: 'login',
    element: <LoginPage />
  },{
    path: 'registrer',
    element: <RegistrerPage/>
  }
]
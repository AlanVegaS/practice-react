import React, { useContext } from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import { AuthContext } from '../context/'

export const Login = () => {

  const lastPath = localStorage.getItem('lastPath') || '/'
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const onLogin = () => {
    login('Alan Vega')
    navigate(lastPath, {
      replace: true
    });
  }

  return (
    <>
      <div className='container mt-5'>
        <h1>Login</h1>
        <hr />
        <button className='btn btn-primary' onClick={onLogin}>
          Login
        </button>
      </div>
      <Outlet />
    </>
  )
}
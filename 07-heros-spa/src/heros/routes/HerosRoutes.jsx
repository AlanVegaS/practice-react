import React from 'react'
import { Outlet } from "react-router-dom";
import { Navbar } from "../../ui"

export const HerosRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
    </>
  )
}
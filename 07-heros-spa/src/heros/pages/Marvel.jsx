import React from 'react'
import { Outlet } from "react-router-dom"

export const Marvel = () => {
  return (
    <>
      <h1>Marvel</h1>
      <Outlet/>
    </>
  )
}

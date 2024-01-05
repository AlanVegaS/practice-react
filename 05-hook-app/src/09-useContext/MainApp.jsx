import React from 'react'
import { Outlet, NavLink } from "react-router-dom"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
    return (
        <UserProvider>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="./home">Home </NavLink>
                        <NavLink className="nav-item nav-link" to="./about">About</NavLink>
                        <NavLink className="nav-item nav-link" to="./login">login</NavLink>
                    </ul>
                </div>
            </nav>
            <h1>HomePage</h1>
            <hr />
            <Outlet />
        </UserProvider>
    )
}
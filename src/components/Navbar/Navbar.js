import React, { useState } from 'react'
import './Navbar.css'
import Header from '../Header/Header'
import Logo from '../Header/Logo'

function Navbar() {

    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    
                    <Logo />
                    <Header />

                </div>
            </div>
        </>
    )
}

export default Navbar

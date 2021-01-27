import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Logo extends Component {
    render() {
        return (
            <>
                <Link to="/" className="navbar-logo">
                     <img src="/logo_icon.svg" alt="jbuit" width="60%" /> 
                </Link>
            </>
        )
    }
}

export default Logo

import React, { Component } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export class Header extends Component {

    state = {
        toggle: false
    }

    menuToggle = () =>{
       this.setState({toggle: !this.state.toggle})
    }

    render() {
        const {toggle} = this.state;
        return (
            <>

                <ul className={toggle ? "toggle" : ""}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/">Tutors</Link></li>
                    <li><Link to="/">Forum</Link></li>
                    <li className="navSignup"><Link to="/signup">Sign Up</Link></li>
                    <li className="close" onClick={this.menuToggle}><FaTimes /></li>
                </ul>
                <div className="menu" onClick={this.menuToggle}><FaBars /></div>
            </>
        )
    }
}

export default Header

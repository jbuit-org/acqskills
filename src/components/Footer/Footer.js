import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdContact, IoMdMailUnread } from 'react-icons/io'
import { MdLocationOn } from 'react-icons/md'
import { FaFacebook, FaSkype, FaLinkedinIn, FaInstagramSquare } from 'react-icons/fa'
import './Footer.css'

function Footer() {
    return (
        <>
            <div className="footerContainer">
                <div className="footerDetails">
                    <div className="footerLinks">
                        <h5>Quick Links</h5>
                        <ul>
                            <li>
                                <Link to="/" className="nav-links">
                                    Home
                                </Link>  
                            </li>
                            <li>
                                <Link to="/" className="nav-links">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-links">
                                    Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-links">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-links">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-links">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footerContact">
                        <h5>Contact Us</h5>
                        <div className="footerContacts-Details">
                            <div className="footerIcon">
                                <IoMdContact />
                            </div>
                            <div className="footerContactDetails">
                                <p>+(234)813-000-1111</p>
                            </div>
                        </div>
                        <div className="footerContacts-Details">
                            <div className="footerIcon">
                                <MdLocationOn />
                            </div>
                            <div className="footerContactDetails">
                                <p>Alagbaka, Akure, Ondo State.</p>
                            </div>
                        </div>
                        <div className="footerContacts-Details">
                            <div className="footerIcon">
                                <IoMdMailUnread />
                            </div>
                            <div className="footerContactDetails">
                                <p>manuelajay@mail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="footerSocial">
                        <h5>Follow Us</h5>
                        <ul>
                            <li>
                                <Link to="/" className="socialLink">
                                    <FaFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="socialLink">
                                    <FaSkype />
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="socialLink">
                                    <FaLinkedinIn />
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="socialLink">
                                    <FaInstagramSquare />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footerKnow">
                        <h5>Get to know us</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="footerCourse">
                        <h5>Course Category</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="footerCourseType">
                        <h5>Course Type</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="footerLogo">
                            <Link to="/" className="footer-logo">
                                <img src="/logo_icon.svg" alt="jbuit" width="70%" /> 
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Footer

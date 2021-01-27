import React from 'react'
import './RegGallery.css'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import {  BsDot } from 'react-icons/bs'

function RegGallery() {
    return (
        <>
            <div className="gallerycontainer">
                <h2>Register for a free course today</h2>
                <div className="imageGallery">
                    <div className="imageSlider">
                        <div className="imageBox">
                            <div className="galleryScroll">
                                <div className="img">
                                    <img src="/images/Pictures.png" alt="html_image" />
                                </div>
                                <div className="imgDetails">
                                    <p>Lorem ipsum dolor sit amet, consectetur elit</p>
                                </div>
                            </div>
                        </div>
                        <div className="imageBox">
                            <div className="galleryScroll">
                                <div className="img">
                                    <img src="/images/Pictures.png" alt="html_image" />
                                </div>
                                <div className="imgDetails">
                                    <p>Lorem ipsum dolor sit amet, consectetur elit</p>
                                </div>
                            </div>
                        </div>
                        <div className="imageBox">
                            <div className="galleryScroll">
                                <div className="img">
                                    <img src="/images/Pictures.png" alt="html_image" />
                                </div>
                                <div className="imgDetails">
                                    <p>Lorem ipsum dolor sit amet, consectetur elit</p>
                                </div>
                            </div>
                        </div>
                        <div className="imageBox">
                            <div className="galleryScroll">
                                <div className="img">
                                    <img src="/images/Pictures.png" alt="html_image" />
                                </div>
                                <div className="imgDetails">
                                    <p>Lorem ipsum dolor sit amet, consectetur elit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scrollbar">
                    <BiChevronLeft /> <BsDot /> <BsDot /> <BsDot /> <BiChevronRight />
                </div>
            </div>
        </>
    )
}

export default RegGallery


//script    
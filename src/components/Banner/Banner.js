import React from 'react'
import { Button } from '../Button/Button'
import './Banner.css'

function Banner() {
    return (
        <>
            <div className="banner-image">
                <div className="banner-container">
                    <div className="banner-text">
                        <h2>ACQUIRE A DIGITAL SKILL</h2>
                        <p>Build skills with courses, certificates, and degrees online from world-class universities and companies.</p>
                        <Button buttonStyle='btn--primary' buttonSize='btn--large'>Get Started</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner

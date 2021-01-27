import React from 'react'
import { Button } from '../Button/Button'
import './LiveClass.css'

function Tutor() {
    return (
        <>
            <div className="box">
                <div className="boxContainer">
                    <div className="boxDetails">
                        <p>Apply To Become a Tutor</p>
                        <Button buttonStyle='btn--primary' buttonSize='btn--large'>Apply</Button>
                    </div>
                </div>
                <div className="boxContainer">
                    <div className="boxDetails">
                        <p>Getting Quality Mentorship</p>
                        <Button buttonStyle='btn--primary' buttonSize='btn--large'>Apply</Button>
                    </div>
                </div>
            </div>

            <div className="level">
                <div className="levelContainer">
                    <div className="levelDetails">
                        <h4>BEGINNERS</h4>
                        <p className="price">
                            <p className="label">$5</p>
                            <p className="month">Monthly</p>
                        </p>
                        <p className="labelSmall">Access to exams, projects and interactive courses</p>
                        <Button buttonStyle='btn--primary' buttonSize='btn--large'>Start Class</Button>
                    </div>
                    <div className="levelDetails">
                        <h4>INTERMEDIATE</h4>
                        <p className="price">
                            <p className="label">$15</p>
                            <p className="month">Monthly</p>
                        </p>
                        <p className="labelSmall">Access to exams, projects and interactive courses</p>
                            <Button buttonStyle='btn--primary' buttonSize='btn--large'>Start Class</Button>
                    </div>
                    <div className="levelDetails">
                        <h4>ADVANCE</h4>
                        <p className="price">
                            <p className="label">$45</p>
                            <p className="month">Monthly</p>
                        </p>
                        <p className="labelSmall">Access to exams, projects and interactive courses</p>
                        <Button buttonStyle='btn--primary' buttonSize='btn--large'>Start Class</Button>
                    </div>
                </div>
                <div className="personal">
                    <p className="labelPersonal">For personal training with Tutor. <span className="personalAmount">$145</span></p>
                    <Button buttonStyle='btn--primary' buttonSize='btn--large'>Get a Tutor</Button>
                </div>
            </div>
        </>
    )
}

export default Tutor

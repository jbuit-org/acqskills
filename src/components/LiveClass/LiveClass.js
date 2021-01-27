import React from 'react'
import { Button } from '../Button/Button'
import './LiveClass.css'

function LiveClass({
    video, header, text, button
}) {
    return (
        <>
            <div className="live">
                <div className="liveClass">
                    <div className="classVideo">
                        <video src={video} autoPlay loop />
                    </div>
                    <div className="classDetails">
                        <h3>{header}</h3>
                        <div className="classText">
                            <p>{text}</p>
                            <Button buttonStyle='btn--primary' buttonSize='btn--large'>{button}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LiveClass

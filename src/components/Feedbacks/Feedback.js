import React from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import './Feedback.css'

function Feedback() {
    return (
        <>
            <div className="feedbackContainer">
                <h2>Student's Feedback</h2>
                <div className="feedbackGallery">
                    <div className="feedDetailsArrow">
                        <BiChevronLeft className="feedArrow"/>
                    </div>
                    <div className="feedDetails">
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the race.</p>
                        <img src="images/Image_shape.png" alt="feedback" />
                        <h4>Amanda Jackson</h4>
                        <h5>Web Design</h5>
                        <h6>Lagos</h6>
                    </div>
                    <div className="feedDetails">
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the race.</p>
                        <img src="images/Image_shape.png" alt="feedback" />
                        <h4>Amanda Jackson</h4>
                        <h5>Web Design</h5>
                        <h6>Lagos</h6>
                    </div>
                    <div className="feedDetails">
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the race.</p>
                        <img src="images/Image_shape.png" alt="feedback" />
                        <h4>Amanda Jackson</h4>
                        <h5>Web Design</h5>
                        <h6>Lagos</h6>
                    </div>
                    <div className="feedDetailsArrow">
                        <BiChevronRight className="feedArrow"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feedback

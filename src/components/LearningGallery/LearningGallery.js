import React from 'react'
import { BiChevronDown } from 'react-icons/bi'

function LearningGallery({
    video, course_title, course_date, course_time
}) {
    return (
        <>
            <div className="learnGallery">
                <div className="learnGalleryVideo">
                    <video src={video} />
                </div>
                <div className="learnGalleryDetails">
                    <h4>{course_title}</h4>
                    <div className="courseTime">
                        <h6>{course_date}</h6>
                        <h6>{course_time}</h6>
                    </div>
                </div>
                <BiChevronDown className="learnIcon" />
            </div>
        </>
    )
}

export default LearningGallery

import React from 'react'

function LearningGalleryNav({
    course, number_courses, level
}) {
    return (
        <>
           <div className="learningNav">
                <h4>{course}</h4>
                <div className="courseTitle">
                    <div className="course_search">
                        <p>{number_courses} Courses</p>
                        <div className="vertical_line"></div>
                        <input type="search" placeholder="Search" className="search"/>
                    </div>
                    <h5>{level}</h5>
                </div>   
            </div> 
        </>
    )
}

export default LearningGalleryNav

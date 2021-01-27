import React from 'react'
import { BiChevronDown } from 'react-icons/bi'

function LearningCourse({
    course_title
}) {
    return (
        <>

           <div className="learningCourse">
               <div className="learningCourseBanner">
                    <div className="learningcoursespace">
                        <h4>{course_title}</h4>
                        <BiChevronDown className="learnIcon" />
                    </div>
                    <div className="learningCourseOption">
                        <ul>
                            <li><a href="#" class="active">Start Course</a></li>
                            <li><a href="#">Add to Cart</a></li>
                            <li><a href="#">Download Course</a></li>
                        </ul>
                    </div>
               </div>
                <div className="learningCourseNav">
                    <div className="navbar_menu">
                        <div className="navbar_link active_navbar">
                            <a href="#">Table of Content</a>
                        </div>
                    </div>
                    <div className="navbar_menu">
                        <div className="navbar_link">
                            <a href="#">Description</a>
                        </div>
                    </div>
                    <div className="navbar_menu">
                        <div className="navbar_link">
                            <a href="#">Exercise Files</a>
                        </div>
                    </div>
                </div>
                <div className="learningCourseMain">
                    <div>
                        <h5>1. Course Overview.</h5>
                    </div>
                    <hr />
                    <div>
                        <h5>1. Course Overview.</h5>
                    </div>
                    <hr /><div>
                        <h5>1. Course Overview.</h5>
                    </div>
                    <hr /><div>
                        <h5>1. Course Overview.</h5>
                    </div>
                    <hr /><div>
                        <h5>1. Course Overview.</h5>
                    </div>
                    <hr /><div>
                        <h5>1. Course Overview.</h5>
                    </div>
                    <hr /><div>
                        <h5>1. Course Overview.</h5>
                    </div>
                    <hr /><div>
                        <h5>1. Course Overview.</h5>
                    </div>
                    <hr /><div>
                        <h5>1. Course Overview.</h5>
                    </div>
                    <hr /><div>
                        <h5>1. Course Overview.</h5>
                    </div>
                    <hr /><div>
                        <h5>1. Course Overview.</h5>
                    </div>
                    <hr />
                </div>
           </div>

        </>
    )
}

export default LearningCourse

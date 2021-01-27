import React from 'react'
import './Achieve.css'

function Achieve() {
    return (
        <>
            <div className="achieveContainer">
                <div className="achieveDetails">
                    <h4>Our Achievements</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected</p>
                    <div className="achieveGallery">
                        <img src="/images/online_course.svg" alt="online_course" />
                        <img src="/images/enroll_student.svg" alt="enroll_student" />
                        <img src="/images/expert_instructor.svg" alt="expert_instructor" />
                        <img src="/images/profile_review.svg" alt="profile_review" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Achieve

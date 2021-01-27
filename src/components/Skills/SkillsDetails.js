import React from 'react'
import { Button } from '../Button/Button'

function SkillsDetails({
    title, price, duration, description
}) {
    return (
        <>
            <div className="skillsDetailsContainer">
                <div className="skillsDetails">
                    <h2>{title} - {price} {duration}</h2>
                    <p>{description}</p>
                </div>

                <div className="pdfGallery">
                    <h2>Web Development PDF (Download web development PDF)</h2>
                    <div className="pdfShowGallery">
                        <div className="pdfDisplay">
                            <div className="pdfImageShow">
                                <img src="/images/Pictures.png" alt="pdf" />
                            </div>
                            <div className="pdfDescription">
                                <small>PDF</small>
                                <h6>INTRODUCTION TO WEB DEVELOPMENT</h6>
                                <small>10 Courses.</small>
                            </div>
                        </div>
                        <div className="pdfDisplay">
                            <div className="pdfImageShow">
                                <img src="/images/Pictures.png" alt="pdf" />
                            </div>
                            <div className="pdfDescription">
                                <small>PDF</small>
                                <h6>INTRODUCTION TO WEB DEVELOPMENT</h6>
                                <small>10 Courses.</small>
                            </div>
                        </div>
                        <div className="pdfDisplay">
                            <div className="pdfImageShow">
                                <img src="/images/Pictures.png" alt="pdf" />
                            </div>
                            <div className="pdfDescription">
                                <small>PDF</small>
                                <h6>INTRODUCTION TO WEB DEVELOPMENT</h6>
                                <small>10 Courses.</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="videoGallery">
                    <h2>Web Development VIDEO COURSES</h2>
                    <div className="videoShowGallery">
                        <div className="videoDisplay">
                            <div className="videoShow">
                                <video src="/video/video-1.mp4" autoPlay loop />
                            </div>
                            <div className="videoDescription">
                                <small>PDF</small>
                                <h6>INTRODUCTION TO WEB DEVELOPMENT</h6>
                                <div className="videoTime">
                                    <small>10 Courses</small>
                                    <small>1hr 10mins</small>
                                </div>
                            </div>
                        </div>
                        <div className="videoDisplay">
                            <div className="videoShow">
                                <video src="/video/video-1.mp4" autoPlay loop />
                            </div>
                            <div className="videoDescription">
                                <small>PDF</small>
                                <h6>INTRODUCTION TO WEB DEVELOPMENT</h6>
                                <div className="videoTime">
                                    <small>10 Courses</small>
                                    <small>1hr 10mins</small>
                                </div>
                            </div>
                        </div>
                        <div className="videoDisplay">
                            <div className="videoShow">
                                <video src="/video/video-1.mp4" autoPlay loop />
                            </div>
                            <div className="videoDescription">
                                <small>PDF</small>
                                <h6>INTRODUCTION TO WEB DEVELOPMENT</h6>
                                <div className="videoTime">
                                    <small>10 Courses</small>
                                    <small>1hr 10mins</small>
                                </div>
                            </div>
                        </div>
                        <div className="videoDisplay">
                            <div className="videoShow">
                                <video src="/video/video-1.mp4" autoPlay loop />
                            </div>
                            <div className="videoDescription">
                                <small>PDF</small>
                                <h6>INTRODUCTION TO WEB DEVELOPMENT</h6>
                                <div className="videoTime">
                                    <small>10 Courses</small>
                                    <small>1hr 10mins</small>
                                </div>
                            </div>
                        </div>
                        <div className="videoDisplay">
                            <div className="videoShow">
                                <video src="/video/video-1.mp4" autoPlay loop />
                            </div>
                            <div className="videoDescription">
                                <small>PDF</small>
                                <h6>INTRODUCTION TO WEB DEVELOPMENT</h6>
                                <div className="videoTime">
                                    <small>10 Courses</small>
                                    <small>1hr 10mins</small>
                                </div>
                            </div>
                        </div>
                        <div className="videoDisplay">
                            <div className="videoShow">
                                <video src="/video/video-1.mp4" autoPlay loop />
                            </div>
                            <div className="videoDescription">
                                <small>PDF</small>
                                <h6>INTRODUCTION TO WEB DEVELOPMENT</h6>
                                <div className="videoTime">
                                    <small>10 Courses</small>
                                    <small>1hr 10mins</small>
                                </div>
                            </div>
                        </div>
                        <div className="videoDisplay">
                            <div className="videoShow">
                                <video src="/video/video-1.mp4" autoPlay loop />
                            </div>
                            <div className="videoDescription">
                                <small>PDF</small>
                                <h6>INTRODUCTION TO WEB DEVELOPMENT</h6>
                                <div className="videoTime">
                                    <small>10 Courses</small>
                                    <small>1hr 10mins</small>
                                </div>
                            </div>
                        </div>
                        <div className="videoDisplay">
                            <div className="videoShow">
                                <video src="/video/video-1.mp4" autoPlay loop />
                            </div>
                            <div className="videoDescription">
                                <small>PDF</small>
                                <h6>INTRODUCTION TO WEB DEVELOPMENT</h6>
                                <div className="videoTime">
                                    <small>10 Courses</small>
                                    <small>1hr 10mins</small>
                                </div>
                            </div>
                        </div>
                        <div className="videoDisplay">
                            <div className="videoShow">
                                <video src="/video/video-1.mp4" autoPlay loop />
                            </div>
                            <div className="videoDescription">
                                <small>PDF</small>
                                <h6>INTRODUCTION TO WEB DEVELOPMENT</h6>
                                <div className="videoTime">
                                    <small>10 Courses</small>
                                    <small>1hr 10mins</small>
                                </div>
                            </div>
                        </div>
                    </div><br />
                    <Button buttonStyle='btn--primary' buttonSize='btn--large'>View More</Button>
                </div>
            </div>
        </>
    )
}

export default SkillsDetails

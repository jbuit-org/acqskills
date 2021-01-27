import React from 'react'
import LearningCourse from './LearningCourse'
import { learnCourse } from './LearningElements'
import LearningGalleryNav from './LearningGalleryNav'
import LearningGallerySide from './LearningGallerySide'
import './LearningGalleryPage.css'

function LearningGalleryList() {
    return (
        <>
            <div className="learnContainer">

                <main>

                    <LearningGalleryNav {...learnCourse} />
                    <hr />
                    
                    <LearningCourse {...learnCourse} />


                </main>

                <sidebar>
                    <LearningGallerySide />
                </sidebar>

            </div>
        </>
    )
}

export default LearningGalleryList

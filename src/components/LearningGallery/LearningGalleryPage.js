import React from 'react'
import { learnCourse } from './LearningElements'
import LearningGallery from './LearningGallery'
import LearningGalleryNav from './LearningGalleryNav'
import './LearningGalleryPage.css'
import LearningGallerySide from './LearningGallerySide'

function LearningGalleryPage() {
    return (
        <>
            
            <div className="learnContainer">

                <main>

                    <LearningGalleryNav {...learnCourse} />
                    <hr />
                    <LearningGallery {...learnCourse} />
                    <hr />
                    <LearningGallery {...learnCourse} />
                    <hr />
                    <LearningGallery {...learnCourse} />
                    <hr />
                    <LearningGallery {...learnCourse} />
                    <hr />
                    <LearningGallery {...learnCourse} />
                    <hr />
                    <LearningGallery {...learnCourse} />
                    <hr />

                </main>

                <sidebar>
                    <LearningGallerySide />
                </sidebar>

            </div>

        </>
    )
}

export default LearningGalleryPage

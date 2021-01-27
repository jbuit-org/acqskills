import React from 'react'
import Achieve from '../../Achievement/Achieve'
import Banner from '../../Banner/Banner'
import Feedback from '../../Feedbacks/Feedback'
import Footer from '../../Footer/Footer'
import LiveClass from '../../LiveClass/LiveClass'
import Tutor from '../../LiveClass/Tutor'
import RegGallery from '../../RegGallery/RegGallery'
import { HomeLiveClass } from './HomeElements'

function Home() {
    return (
        <>
            <Banner />
            <RegGallery />
            <LiveClass {...HomeLiveClass} />
            <Tutor />
            <Achieve />
            <Feedback />

            <Footer />
        </>
    )
}

export default Home

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SkillsNav from '../../Skills/SkillsNav'
import SkillsBeginner from '../../Skills/SkillsBeginner'
import Feedbacks from '../../Feedbacks/Feedback'
import './Skills.css'
import Footer from '../../Footer/Footer';

function Skills() {
    return (
        <>
            <SkillsNav />
            <SkillsBeginner />
            
            <div className="SkillsPage">
                <Feedbacks />

                <Footer />
            </div>
        </>
    )
}

export default Skills

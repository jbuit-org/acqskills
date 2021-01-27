import React from 'react'
import { Link } from 'react-router-dom'

function SkillsNav() {
    return (
        <>
            <div className="skillsContainer">
                <div className="skillsNav">
                    <ul className="skillsMenu">
                        <li className="skill-item">
                            <Link to='#SkillsBeginner' className="skills-links">
                                Beginner
                            </Link>
                        </li>
                        <li className="skill-item">
                            <Link to='#SkillsIntermediate' className="skills-links">
                                Intermediate
                            </Link>
                        </li>
                        <li className="skill-item">
                            <Link to='#SkillsBeginner' className="skills-links">
                                Advance
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SkillsNav

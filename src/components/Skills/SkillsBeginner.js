import React from 'react'
import SkillsDetails from './SkillsDetails'
import LiveClass from '../LiveClass/LiveClass'
import { Beginners, SkillsLiveClass } from './SkillsElement'

function SkillsBeginner() {
    return (
        <>
            <div className="SkillsPage">
                <SkillsDetails {...Beginners} />

                <div className="slive">
                    <LiveClass {...SkillsLiveClass} />
                </div>
            </div>
        </>
    )
}

export default SkillsBeginner

import React from 'react'
import Computer from '/src/images/computer.png'
import './page-icon.css'

function ExperienceIcon() {
    return (
        <div>
            <img
                src={Computer} 
                alt="Experience Icon"
                className="page-icon"
            />
        </div>
    )
}

export default ExperienceIcon
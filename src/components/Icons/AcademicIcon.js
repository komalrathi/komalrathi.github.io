import React from 'react'
import Pen from '/src/images//pen.png'
import './page-icon.css'

function AcademicIcon() {
    return (
        <div>
            <img
                src={Pen} 
                alt="Academic Icon"
                className="page-icon"
            />
        </div>
    )
}

export default AcademicIcon
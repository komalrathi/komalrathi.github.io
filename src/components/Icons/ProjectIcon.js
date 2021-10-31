import React from 'react'
import Project from '/src/images//project.png'
import './page-icon.css'

function ProjectIcon() {
    return (
        <div>
            <img
                src={Project} 
                alt="Project Icon"
                className="page-icon"
            />
        </div>
    )
}

export default ProjectIcon
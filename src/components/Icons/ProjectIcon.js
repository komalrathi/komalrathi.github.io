import React from 'react'
import Project from '/src/images//project.png'

function ProjectIcon() {
    return (
        <div>
            <img
                src={Project} 
                alt="Project Icon"
                style = {
                    {
                        textAlign:"center",
                        height:"5.5rem",
                        float:"left",
                        transform:"translate(0%, 60%)"
                    }
                }
            />
        </div>
    )
}

export default ProjectIcon
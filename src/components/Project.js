import React from 'react'
import ProjectBlock from './Blocks/ProjectBlock'

function Project() {
    return (
        <div>
            <h1 style={
                    {
                        display:"block",
                        textAlign:"center"
                    }
                }>
                Projects
            </h1>

            <ProjectBlock 
                project={"Personal Website and Blog"}
                date={""}
                info={"Learnt React and Gatsby to create this website and blog"}
            />
            <ProjectBlock
                project={"Segmentation Network to Locate and Predict Damage to Bikes"}
                date={"November - December 2021"}
                info={"Worked in a 2 person team with the company Captur"}
            />

        </div>
    )
}

export default Project
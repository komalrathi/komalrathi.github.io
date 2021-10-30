import React from 'react'
import ExperienceBlock from './Blocks/ExperienceBlock'

function Experience() {
    return (
        <div>
            <h1 style={
                    {
                        display:"block",
                        textAlign:"center"
                    }
                }>
                Experience
            </h1>

            <ExperienceBlock 
                place={"Expedia"}
                date={"July 2020"}
                info={"Learnt about agile and waterfall software engineering methodologies and how they are used in the workplace"}
            />

        </div>
    )
}

export default Experience
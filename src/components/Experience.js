import React from 'react'
import ExperienceBlock from './Blocks/ExperienceBlock'
import Microsoft from '../images/microsoft.png'


function Experience() {
    return (
        <div style={
            {
                paddingBottom:"1.5rem"
            }
        }>
            <h1 style={
                    {
                        display:"block",
                        textAlign:"center"
                    }
                }>
                Experience
            </h1>
            
            <ExperienceBlock
                image={Microsoft}
                place={"Microsoft"}
                role={"Software Engineering Intern"}
                date={"July - Sept 2023"}
                info={""}

            />

            <ExperienceBlock
                image={Microsoft}
                place={"Microsoft"}
                role={"Software Engineering Intern"}
                date={"July - Sept 2022"}
                info={"Worked in Azure for Operators division. \n Created an application in C# to monitor health of a service. \n Finished intern project ahead of time. \n Wrote a design and specification for a new feature, and started implementing this."}

            />

        </div>
    )
}

export default Experience
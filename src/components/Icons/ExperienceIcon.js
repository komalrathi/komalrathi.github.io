import React from 'react'
// import Briefcase from '/src/images/briefcase-solid.svg'
import Computer from '/src/images/computer.png'

function ExperienceIcon() {
    return (
        <div>
            <img
                src={Computer} 
                alt="Experience Icon"
                style = {
                    {
                        textAlign:"center",
                        height:"5.5rem",
                        // fontSize:"2.5rem",
                        // backgroundColor:"#7c7c7c",
                        // padding:"1rem",
                        // borderRadius:"100%",
                        float:"left",
                        transform:"translate(0%, 50%)"
                    }
                }
            />
        </div>
    )
}

export default ExperienceIcon
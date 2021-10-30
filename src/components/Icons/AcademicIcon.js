import React from 'react'
// import Building from '/src/images/university-solid.svg'
import Pen from '/src/images//pen.png'

function AcademicIcon() {
    return (
        <div>
            <img
                src={Pen} 
                alt="Academic Icon"
                style = {
                    {
                        textAlign:"center",
                        height:"5.5rem",
                        // fontSize:"2.5rem",
                        // backgroundColor:"#7c7c7c",
                        // padding:"1rem",
                        // borderRadius:"100%",
                        float:"left",
                        transform:"translate(0%, 60%)"
                    }
                }
            />
        </div>
    )
}

export default AcademicIcon
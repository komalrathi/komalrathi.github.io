import React from 'react'

function Intro() {
    return (
        <div>
            <p style ={
                {
                    textAlign:"justify",
                    marginLeft:"2rem",
                    marginRight:"2rem"
                }
            }> 
                Hi! My name is Komal and I am a first year Computer Science student at University of Manchester.
                <br></br>
                I am particularly interested in security engineering, such as cryptography and data privacy.
            </p>
        </div>
    )
}

export default Intro
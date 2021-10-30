import React from 'react'
import { Link } from "gatsby";

function Intro() {
    return (
        <div>
            <p style ={
                {
                    textAlign:"justify",
                    marginLeft:"2rem",
                    marginRight:"2rem"
                    // flexDirection:"column",
                    // justifyContent:"flex-start",
                    // flexWrap:"wrap",
                    // alignItems:"center",
                    // justifyContent:"space-around",
                }
            }> 
                Hi! My name is Komal and I am a first year Computer Science student at Newnham College, University of Cambridge.
                <br></br>
                I've also been writing a blog about new things I am learning about related to Computer Science. If you're interested, please <Link to="/blog" itemProp="url"> check it out</Link> !
            </p>
        </div>
    )
}

export default Intro
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'

function AboutMe() {
    return (
        <div>
            <Navbar />
            <div
            style={{
                textAlign:"justify",
                paddingRight:"2rem",
                paddingLeft:"2rem"
            }}>
                <h1 
                style={
                    {
                        textAlign:"center",
                    }
                }> 
                    About Me 
                </h1>
                <p> 
                    Hi! My name is Komal and I am a first year Computer Science student at Newnham College, University of Cambridge.
                </p>
            </div>
            <Footer />
        </div>
    )
}


 export default AboutMe
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import ProfilePic from '../components/ProfilePic'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Intro from '../components/Intro'
// import Project from '../components/Project'

function AboutMe() {
    return (
        <div>
            <Navbar />
            <div>
                <h1 
                style={
                    {
                        textAlign:"center",
                    }
                }> 
                    About Me 
                </h1>
                <div style={
                    {
                        display: "grid",
                        gridTemplateColumns: "5% 60%", 
                        gridTemplateRows: "15rem",
                        gridColumnGap: "15rem",
                        marginLeft:"3rem",
                        paddingBottom:"3rem"
                    }
                }>
                    <ProfilePic />
                    <Intro />
                </div>
                
                <Experience />
                <br></br>
                <Education />
                
                {/* <Project /> */}

            </div>
            <Footer />
        </div>
    )
}


 export default AboutMe
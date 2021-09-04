import React from 'react'
import './HomePage.css'
import Background from './background.js'
import AcademicBlock from './AcademicBlock'
import KEHS from '/src/images/KEHS_logo.png'
import NHS from '/src/images/NHS_logo.png'
import Cambridge from '/src/images/Cam_logo.png'


function HomePage() {
    return (
        <div>
            <Background />
            <h1 style={
                {
                    paddingLeft:"2rem"
                }
            }> 
            Hello World!</h1>

            <AcademicBlock 
                place = {"University of Cambridge"}
                year = {"2021-2024"}
                imageUrl = {Cambridge}
            />
            <AcademicBlock 
                place = {"King Edward VI High School for Girls"}
                year = {"2019-2021"}
                grades = {"A-Levels : 2A*s and 2As"}
                subject = {"in Biology, Chemistry, Maths and Further Maths"}
                imageUrl = {KEHS}
            />
            <AcademicBlock 
                place = {"Nottingham High School"}
                year = {"2016-2019"}
                grades = {"GCSEs : 9 Grade 9s, 1 A* and an A (top grade)"}
                subject = {"in FSMQ Additional Maths"}
                imageUrl = {NHS}
            />
        </div>
    )
}

export default HomePage
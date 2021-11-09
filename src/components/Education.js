import React from 'react'
import AcademicBlock from './Blocks/AcademicBlock'

function Education() {
    return (
        <div>
            <h1 style={
                    {
                        display:"block",
                        textAlign:"center"
                    }
                }> Education 
            </h1>

            <AcademicBlock 
                place = {"University of Cambridge"}
                year = {"2021-2024"}
                subject = {"First year BA Computer Science student"}
            />
            <AcademicBlock 
                place = {"King Edward VI High School for Girls"}
                year = {"2019-2021"}
                grades = {"A-Levels : 2A*s and 2As"}
                subject = {"in Maths, Further Maths, Biology and Chemistry"}
            />
            <AcademicBlock 
                place = {"Nottingham High School"}
                year = {"2016-2019"}
                grades = {"GCSEs : 9 Grade 9s, 1 A* and an A (top grade)"}
                subject = {"in FSMQ Additional Maths"}
            />

        </div>
    )
}

export default Education
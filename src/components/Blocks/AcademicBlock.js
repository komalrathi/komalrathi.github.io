import React from 'react'
import AcademicIcon from '../Icons/AcademicIcon'

function AcademicBlock(props) {
        return (
            <div className="block">
                <AcademicIcon />

                <div style={
                    {
                        justifyContent:"center",
                        alignItems:"center",
                    }
                }>
                    <h3> {props.place} </h3>
                    <h4> {props.year} </h4>
                    <p> {props.grades} {props.subject} </p>
                </div>
            </div>
        )
}

export default AcademicBlock 
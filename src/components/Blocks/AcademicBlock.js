import React from 'react'

function AcademicBlock(props) {
        return (
            <div className="block">
                <div>
                <img
                    src={props.image} 
                    alt="School Logo"
                    className="page-icon"
                />
                </div>

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
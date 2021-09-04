import React from 'react'

function AcademicBlock(props) {
        return (
            <div style={
                {
                    textAlign:"center",
                    paddingBottom:"4rem"
                }
            }>
                <img src = {props.imageUrl} alt="school-logo"
                style = {
                    {
                        display:"block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "10%",
                    }
                }/>

                <h3> {props.place}</h3>
                <h4> {props.year}</h4>
                <p> {props.grades} {props.subject}</p>
            </div>
        )
}

export default AcademicBlock
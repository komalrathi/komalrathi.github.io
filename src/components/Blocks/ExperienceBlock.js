import React from 'react'
import './block.css'

function ExperienceBlock(props) {
    return(
        <div className="block">
                <div>
                <img
                    src={props.image} 
                    alt="Company Logo"
                    className="page-icon"
                    style={
                        {
                            width: "11em",
                            paddingRight: "3em",
                            marginTop: "3em",
                        }
                    }
                />
                </div>

                <div style={
                    {
                        justifyContent:"center",
                        alignItems:"center",
                    }
                }>

                    <h3> {props.place} </h3>
                    <h4>{props.role}</h4>
                    <h5> {props.date} </h5>
                    <p style= {
                        {
                            whiteSpace: "pre-wrap"
                        }
                    }> {props.info} </p>
                </div>
                
            </div>
    )
}

export default ExperienceBlock
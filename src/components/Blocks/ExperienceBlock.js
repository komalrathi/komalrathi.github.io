import React from 'react'
import ExperienceIcon from '../Icons/ExperienceIcon'
import './block.css'

function ExperienceBlock(props) {
    return(
        <div className="block">
            
            <ExperienceIcon /> 

                <div style={
                    {
                        justifyContent:"center",
                        alignItems:"center",
                    }
                }>
                    <h3> {props.place} </h3>
                    <h4> {props.date} </h4>
                    <p> {props.info} </p>
                </div>
                
            </div>
    )
}

export default ExperienceBlock
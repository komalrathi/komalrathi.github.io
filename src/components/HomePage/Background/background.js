import React from 'react'
import './background.css'
import GitHubIcon from '../../Icons/GitHubIcon'
import LinkedInIcon from '../../Icons/LinkedInIcon'


const Background = () => {
    return (
        <div>
            <div className="image">

                <h1 className="heading"> 
                    KOMAL RATHI
                </h1>
                <div className="container">
                    <GitHubIcon /> 
                    <LinkedInIcon />
                </div>
                
            </div>

        </div>
    )

}

export default Background
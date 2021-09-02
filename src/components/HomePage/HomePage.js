import React from 'react'
import './HomePage.css'
import Background from './background.js'


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
        </div>
    )
}

export default HomePage
import React from 'react'
import background from './background.jpg'

function Background() {
    return (
        <img 
            style ={{maxWidth: "100%", paddingBottom:"1em"}}
            src={background} 
            alt="background" />)
}

export default Background
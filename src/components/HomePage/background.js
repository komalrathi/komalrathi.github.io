import React from 'react'
import background from './background.jpg'

function Background() {
    return (
        <div>
            <img 
                style ={
                    {
                        maxWidth: "100%", 
                        paddingBottom:"1em",
                        overflow: 'hidden'
                    }
                }
                src={background} 
                alt="background" />
        </div>
    )

}

export default Background
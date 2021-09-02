import React from 'react'
import background from './background.jpg'

function Background() {
    return (
        <div>
            <img 
                style ={
                    {
                        maxWidth: "100%",
                        overflow: 'hidden'
                    }
                }
                src={background} 
                alt="background" />
        </div>
    )

}

export default Background
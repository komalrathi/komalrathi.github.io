import React from 'react'
import LinkedIn from '/src/images/linkedin.png'
import "./icon.css"

class LinkedInIcon extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
            window.location.href='https://www.linkedin.com/in/komal-rathi-118871223/'
    }

     render () {
        return (
            <div>
                <button onClick={this.handleClick} className="button">
                    <img
                        className="icon"
                        src={LinkedIn} 
                        alt="LinkedIn logo" />
                </button>
            </div>
        )
     }
}

export default LinkedInIcon
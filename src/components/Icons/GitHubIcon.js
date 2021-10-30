import React from "react"
import GitHub from '/src/images/github.png'
import './icon.css'

class GitHubIcon extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
            window.location.href='https://github.com/komalrathi'
    }

    render() {
        return (
            <div>
                <button onClick = {this.handleClick} className="button"> 
                    <img
                    className="icon"
                    src={GitHub} 
                    alt="GitHub logo" />
                </button>
            </div>
        )
    }
}

export default GitHubIcon
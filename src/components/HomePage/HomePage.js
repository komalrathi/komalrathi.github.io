import React from 'react'
import Background from './Background/background.js'
import Navbar from '../Navbar/Navbar.js'


function HomePage() {
    return (
        <div>
            <Navbar navbarStatus={"true"} />
            <Background />
        </div>
    )
}

export default HomePage
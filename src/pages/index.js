import React from 'react'
import App from './App'
import "@fontsource/concert-one"
import "@fontsource/lora"
import "@fontsource/andada-pro"

import "@fontsource/josefin-sans"
import "@fontsource/comfortaa"
import "@fontsource/biorhyme"
import "@fontsource/playfair-display"


import ReactGA from 'react-ga';
const TRACKING_ID = "UA-212617990-1";
ReactGA.initialize(TRACKING_ID);


export default function Webpage() {
    return (
        <App />
    )
}
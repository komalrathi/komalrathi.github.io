import React from 'react'
import App from './App'
import "@fontsource/aleo"
import "@fontsource/nunito"
import "@fontsource/lato"
import "@fontsource/josefin-sans"


import ReactGA from 'react-ga';
const TRACKING_ID = "UA-212617990-1";
ReactGA.initialize(TRACKING_ID);


export default function Webpage() {
    return (
        <App />
    )
}
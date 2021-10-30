import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

function BookIcon() {
    return (
        <FontAwesomeIcon icon={faBook} style ={ 
            {
            textAlign:"center",
            fontSize:"2.5rem",
            backgroundColor:"#7c7c7c",
            color:"white",
            padding:"1rem",
            borderRadius:"100%",
            float:"left",
            transform:"translate(0%, 70%)"
            }
        } />
    )
}

export default BookIcon
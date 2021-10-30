import React from 'react'
import AcademicIcon from '../Icons/AcademicIcon'

function AcademicBlock(props) {
        return (
            <div style={
                {
                    // textAlign:"center",
                    // padding:"4rem",
                    // display:"flex-box",
                    // flexDirection:"column",
                    // flexWrap:"nowrap",
                    // justifyContent:"space-around",
                    // alignItems:"center",
                    // alignSelf:"flex-start",

                    display: "grid",
                    gridTemplateColumns: "5% 60%", 
                    gridTemplateRows: "15rem",
                    gridColumnGap: "5rem",
                    marginLeft:"20%",
                    marginBottom:"3rem"
                }
            }>
                <AcademicIcon />

                {/* <img src = {props.imageUrl} alt="school-logo"
                style = {
                    {
                        height:"12rem",
                        float:"left",
                        display:"flex-box",
                        flexDirection: "row",
                        marginBottom:"2rem",
                        alignSelf: "flex-start",
                        objectFit:"contain",
                        flexWrap:"nowrap",
                        alignItems:"center",
                        textAlign:"center",
                    }
                }/> */}
                <div style={
                    {
                        justifyContent:"center",
                        alignItems:"center",
                    }
                }>
                    <h3> {props.place} </h3>
                    <h4> {props.year} </h4>
                    <p> {props.grades} {props.subject} </p>
                </div>
            </div>
        )
}

export default AcademicBlock 
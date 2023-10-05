import React from "react";
import AcademicBlock from "./Blocks/AcademicBlock";
import Manchester from "../images/manchester.png";
import Nottingham from "../images/nhs.png";
import KEHS from "../images/kehs.png";

function Education() {
  return (
    <div
      style={{
        paddingBottom: "1.5rem",
      }}
    >
      <h1
        style={{
          display: "block",
          textAlign: "center",
        }}
      >
        {" "}
        Education
      </h1>
    
      <AcademicBlock
        image={Manchester}
        place={"University of Manchester"}
        year={"2023-2026"}
        subject={"First year BSc Computer Science student"}
      />
      <AcademicBlock
        image={KEHS}
        place={"King Edward VI High School for Girls"}
        year={"2019-2021"}
        grades={"A-Levels : 2A*s and 2As"}
        subject={"in Maths, Further Maths, Biology and Chemistry"}
      />
      <AcademicBlock
        image={Nottingham}
        place={"Nottingham High School"}
        year={"2016-2019"}
        grades={"GCSEs : 9 Grade 9s, 1 A* and an A (top grade)"}
        subject={"in FSMQ Additional Maths"}
      />
    </div>
  );
}

export default Education;

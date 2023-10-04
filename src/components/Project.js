import React from "react";
import ProjectBlock from "./Blocks/ProjectBlock";

function Project() {
  return (
    <div>
      <h1
        style={{
          display: "block",
          textAlign: "center",
        }}
      >
        Projects
      </h1>

      <ProjectBlock
        project={"Personal Website and Blog"}
        date={""}
        info={"Learnt React and Gatsby to create this website and blog"}
      />
    </div>
  );
}

export default Project;

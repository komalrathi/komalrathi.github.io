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
        Personal Projects
      </h1>

      <ProjectBlock
        project={"Personal Website and Blog"}
        date={""}
        info={"Created using React and Gatsby"}
      />
    </div>
  );
}

export default Project;

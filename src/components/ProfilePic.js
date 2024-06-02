import React from "react";
import Picture from "../images/profile_pic.jpg";

function ProfilePic() {
  return (
    <div>
      <img
        src={Picture}
        alt="Komal Rathi"
        style={{
          width: "19rem",
          borderRadius: "100%",
          display: "flex",
          margin: "0.1rem",
          flexDirection: "column",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      />
    </div>
  );
}

export default ProfilePic;

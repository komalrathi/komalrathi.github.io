import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        display: "block",
        color: "black",
        marginTop: "2rem",
        marginBottom: "0",
        height: "7vh",
      }}
    >
      © Komal Rathi {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;

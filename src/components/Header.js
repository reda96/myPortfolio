import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";
const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>web development and websites promotions</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Frontend Development",
            "Backend Development",
          ]}
          tyoeSpeed={40}
          backSpeed={40}
          loop
        />
        <a
          style={{ textDecoration: "none" }}
          href=""
          className="btn-main-offer"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;

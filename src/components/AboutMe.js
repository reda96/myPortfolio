import React from "react";
import author from "../avatar-2.png";
const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>

        <div className="col-lg-6 col-xm-12 p">
          <h1 className="about-heading">about me</h1>
          <p>
            Hello! I am Wilson. I have been developing websites for over 2
            years. I'm Full-Stack Web Develper. Technoloties I use is
            MERN(MongoDB, Express, ReactJS and NodeJS) I create cross-platform
            mobile applications that are displayed on android and ios devices.
            Before I start developing an app for you, we can discuss all the
            details of your niche with you, I will conduct a survery of your
            competitors and make a list of their advantages and weaknesses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

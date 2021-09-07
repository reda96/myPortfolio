import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faCube,
  faFileCode,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
const Services = (props) => {
  return (
    <div ref={props.myRef} className="services">
      <div className="container">
        <h1 className="py-5">Skills</h1>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faFileCode}
                  size={"2x"}
                />
              </div>
              <h3>Web Applicatons</h3>
              <p>
                I approach each project individually and always focus on the
                result
              </p>
            </div>
          </div>
          {/*-*/}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faMobile} size={"2x"} />
              </div>
              <h3>Native Mobile Apps</h3>
              <p>
                I can create restful api with the help of Express framework
                based on Node.js
              </p>
            </div>
          </div>
          {/*-*/}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon className="icon" icon={faCube} size={"2x"} />
              </div>
              <h3>IBM Cognos TM1</h3>
              <p>
                Design, develop and maintain multidimensional models. Top notch
                support for Cognos TM1 Models
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon className="icon" icon={faCogs} size={"2x"} />
              </div>
              <h3>Automation</h3>
              <p>Top notch support for Cognos TM1 Models</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

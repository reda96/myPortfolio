import React from "react";

const Experience = (props) => {
  return (
    <div ref={props.myRef} className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2013-2018:June</h3>
            <p>
              Studing Computer Engineer i German University in Cairo and I have
              Bachelor degree and have been graduated with GPA: B+
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018:July-2018:September</h3>
            <p>
              I have a remotely internship as Frontend development using Recat
              and React Native. I was working on a language-learning App
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018:October-2021:April</h3>
            <p>
              Doing my military service as a reserve officer. I was working in
              Network engineering during this period
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021:may-Now</h3>
            <p>Working as a web developer freelancer</p>
          </div>
        </div>
        {/* - */}>
      </div>
    </div>
  );
};
export default Experience;

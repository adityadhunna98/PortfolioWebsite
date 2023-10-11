import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import Navbar from "./Navbar";

function Experience() {
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <div className="experience">
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2016 - 2017"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bhai Parmanand Vidya Mandir
            </h3>
            <p> Matriculation</p>
            <p>9.8/10</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018 - 2019"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bhai Parmanand Vidya Mandir
            </h3>
            <p> Intermediate/+2</p>
            <p>87.6 %</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 - 2023"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Inderprastha Engineering College, AKTU
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Bachelors in Technology (B. Tech)
            </h4>

            <p> Electronics and Communication (E.C.E)</p>
            <p> 8.21/10</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2022 - May 2022"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              UI/Front-End Developer - Geetanjali Foundation
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Delhi, India</h4>
            <p>
              Developed and maintained organization's website to create visually
              appealing user interfaces, and implementing responsive design.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2022 - Dec 2022"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer Intern - Octro Inc.
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Noida, India</h4>
            <p>
              {/* Showcased full-stack expertise in front-end and back-end
              development, including user module interface design that reduced
              user addition time by 90%, while proactively acquiring new
              technologies to enhance project contributions. */}
              As an SDE Intern at Octro Inc., I adeptly managed full-stack applications, optimized the user addition process, and boosted project efficiency by 40% through the implementation of ReactJS, Flask, AntD, and MySQL technologies.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2023 - present"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer Intern - KPMG India
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Gurugram, India
            </h4>
            <p>
              {/* Collaborated with team to design, develop, and maintain web-based
              applications using MERN stack, including scalable back-end systems
              with NodeJS and MongoDB, and user-focused React front-end
              applications. */}
              As an SDE Intern at KPMG India, I took charge of developing two MERN stack tools, elevating team efficiency by 50%. I honed skills in ReactJS, NodeJS, ExpressJS, and MongoDB, enhancing my technical expertise while contributing to project success.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2023 - present"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer Engineer - KPMG India
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Gurugram, India
            </h4>
            <p>
              At KPMG India, I played a pivotal role in
              spearheading web application development using the MERN stack.
              This effort resulted in an impressive 80% increase in team
              productivity, highlighting my contributions to the company's
              success, as well as a notable 60% improvement in user experience.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Experience;

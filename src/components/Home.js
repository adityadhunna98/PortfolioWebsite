import React, { useState, useEffect } from "react";
import homeImage from "./images/homeImage.gif";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { useLocation } from "react-router-dom";

export function ChangeTitle() {
  const location = useLocation();

  if (location.hash === "#about") {
    document.title = "Aditya Dhunna - About";
  } else if (location.pathname === "/projects") {
    document.title = "Aditya Dhunna - Projects";
  } else if (location.pathname === "/contact") {
    document.title = "Aditya Dhunna - Contact";
  } else if (location.pathname === "#workexperience") {
    document.title = "Aditya Dhunna - Work Experience";
  } else {
    document.title = "Aditya Dhunna";
  }
}

function Home() {
  ChangeTitle();
  // const [age, setAge] = useState(0)
  const [copyright, setCopyright] = useState("");

  useEffect(() => {
    // const miliseconds = new Date() - new Date('01/08/2001')
    // setAge(Math.floor(miliseconds / 1000 / 60 / 60 / 24 / 365))

    const year = new Date().getFullYear();
    setCopyright(year);
  }, []);

  // Strings for typewriter effect
  const strings = [
    "software development.",
    "music.",
    "learning new technologies.",
    "business.",
  ];

  return (
    <div className="font-sans antialiased relative bg-white">
      <section id="home">
        <div className="flex lg:flex-row flex-col justify-evenly items-center lg:px-32 px-8 pt-40">
          <div className="intro-header lg:text-left text-center">
            <p className="lg:text-3xl md:text-2xl text-xl font-medium">
              Hi! I am
            </p>
            <p className="lg:text-4xl md:text-3xl text-2xl font-bold tracking-wide">
              Aditya Dhunna.
            </p>
            <p className="lg:text-xl md:text-lg text-base mt-2 font-light">
              I'm a programmer with a passion for{" "}
              <Typewriter
                options={{ strings: strings, autoStart: true, loop: true }}
              />
            </p>
          </div>
          <div className="gif">
            <homeImage />
            {/* <iframe title='gif' src="https://giphy.com/embed/qgQUggAC3Pfv687qPC" width="500" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
            <img src={homeImage} alt="programmer-gif" width="500" />
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex md:flex-row flex-col justify-between lg:px-16 px-6 pt-36 md:pb-415 sm:pb-2 pb-28">
          <div className="p-4 md:w-1/2 w-1/1 md:mx-4 md:mb-0 mb-6">
            <p className="about-header md:text-3xl text-2xl mb-4 font-medium">
              About Me
            </p>
            <p className="about-info md:text-lg text-base tracking-wider leading-relaxed">
              Hello! I'm Aditya Dhunna, a B.Tech student from IPEC(AKTU). I'm
              currently pursuing my degree in ECE and have gained real-world
              experience through internships at KPMG India and Octro Inc. My
              passion lies in website development, and I have hands-on
              experience in ReactJS, MYSQL, Flask,MERN Stack. I'm a dedicated
              learner, constantly improving my skills and staying updated with
              industry trends.
            </p>
            <br></br>
            <p className="about-info md:text-lg text-base tracking-wider leading-relaxed">
              Apart from my academic pursuits, I'm enthusiastic about Cricket,
              Music, Travelling, which adds to my well-rounded personality. I
              believe in "designing websites that leave an impression." and
              strive to deliver high-quality work that exceeds expectations. I'm
              committed to maintaining a healthy work-life balance and actively
              engaging in my community.
            </p>
            <br></br>
            <p className="about-info md:text-lg text-base tracking-wider leading-relaxed">
              I'm excited to showcase my skills and projects through my
              portfolio website and explore new opportunities in website
              development. Please feel free to browse my portfolio and reach out
              to me for inquiries or collaborations. Let's create amazing
              websites together{" "}
              <a href="mailto:adityadhunna98@gmail.com" target="__blank">
                adityadhunna98@gmail.com
              </a>
              !
            </p>
          </div>
          <div className="p-4 md:w-1/2 w-1/1 md:mx-4">
            <p className="about-header md:text-3xl text-2xl mb-4 font-medium">
              Skills
            </p>
            <div className="lang-and-fw flex flex-col flex-wrap">
              {/* LANGUAGES */}
              <div className="languages mb-4">
                <p className="text-xl mb-2">Languages</p>
                {/* PROFICIENT ROW */}
                <div className="proficient-row flex flex-wrap mb-1">
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">C/C++</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">HTML/CSS</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">JavaScript</p>
                  </div>
                </div>

                {/* INTERMEDIATE ROW */}
                <div className="intermediate-row flex flex-wrap mb-1">
                  <div className="p-1 intermediate rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Python</p>
                  </div>
                  <div className="p-1 intermediate rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">SQL</p>
                  </div>
                </div>
              </div>

              {/* FRAMEWORKS/LIBRARIES */}
              <div className="frameworks mb-4">
                <p className="text-xl mb-2">Frameworks/Libraries</p>
                {/* PROFICIENT ROW */}
                <div className="proficient-row flex flex-wrap mb-1">
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">React</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Flask</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Node</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Tailwind</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Material UI</p>
                  </div>
                </div>

                {/* INTERMEDIATE ROW */}
                <div className="intermediate-row flex flex-wrap mb-1">
                  <div className="p-1 intermediate rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">ANTD</p>
                  </div>
                  <div className="p-1 intermediate rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Chakra UI</p>
                  </div>
                </div>

                {/* BEGINNER ROW */}
                <div className="beginner-row flex flex-wrap"></div>
              </div>

              {/* Tools */}
              <div className="tools mb-4">
                <p className="text-xl mb-2">Tools</p>
                {/* PROFICIENT ROW */}
                <div className="proficient-row flex flex-wrap mb-1">
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Visual Studio Code</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Git</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Github</p>
                  </div>
                </div>

                {/* INTERMEDIATE ROW */}
                <div className="intermediate-row flex flex-wrap mb-1">
                  <div className="p-1 intermediate rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">MongoDB</p>
                  </div>
                  <div className="p-1 intermediate rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Figma</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Canva</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="workexperience">
        <div className=" lg:px-16 px-6 pt-36 md:pb-36 sm:pb-2 pb-36">
          <div className="p-4 md:mx-4 md:mb-0 mb-6">
            <p className="about-header md:text-3xl text-2xl mb-4 font-medium">
              Work Experience
            </p>
            <p className="text-xl mb-2">
              Analyst Intern | KPMG India (Jan'23 - Present)
            </p>

            <p className="about-info md:text-lg text-base tracking-wider leading-relaxed">
              ◦ Collaborated with the team to design, develop, and maintain
              web-based applications using the MERN stack.
              <br></br>◦ Created and implemented scalable and efficient back-end
              systems using NodeJS and MongoDB.
              <br></br>◦ Developed and maintained React-based front-end
              applications with a focus on user experience and functionality.
            </p>
            <br></br>
            <br></br>
            <p className="text-xl mb-2">
            Software Developer Intern | OCTRO INC. (July'22-Dec'22)
            </p>

            <p className="about-info md:text-lg text-base tracking-wider leading-relaxed">
              ◦ Demonstrated full-stack operations, including front-end and back-end development and database management.
              <br></br>◦ Led the design and implementation of the user module interface, which reduced the time to add a user by 90%.
              <br></br>◦ Proactively learned new technologies, such as ReactJS, Flask, AntD, and MySQL, to expand my skill set and
enhance my contributions to the project.
            </p>
          </div>
        </div>
      </section>
      <div className="ending-msg font-light text-center absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center">
        <p style={{ color: "white" }}>
          <b>Created with ❤️ by Aditya Dhunna. </b>
        </p>
        <p style={{ color: "white" }}>
          <b>© {copyright} Aditya Dhunna. All rights reserved.</b>
        </p>
      </div>
    </div>
  );
}

export default Home;

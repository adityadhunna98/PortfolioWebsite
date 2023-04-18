import React from "react";
import "./Modal.css";

export function ImpulseFit({ showModal, closeModal }) {
  return (
    <div
      className="modal bg-white lg:w-1/3 md:w-3/5 w-5/6 p-4 m-8 rounded-lg fixed top-1/4"
      style={{
        visibility: showModal ? "visible" : "hidden",
        opacity: showModal ? 1 : 0,
      }}
    >
      <div className="modal-info flex flex-col">
        <div className="flex flex-row justify-between items-center mb-4">
          <h4 className="text-left text-lg font-medium">Impulse Fit</h4>
          <p onClick={closeModal} className="cursor-pointer">
            &times;
          </p>
        </div>
        <div className="project-info">
          <p className="font-light text-sm tracking-wide">
          ImpuleFit is an Fitness website made with the help of HTML5, CSS3, JavaScript and made responsive with the help of tailwind css.{" "}
            
            <br></br>
            Check out the git repository{" "}
            <a
              href="https://github.com/adityadhunna98/ImpuleFit"
              target="__blank"
            >
              here
            </a>{" "}
            and the app{" "}
            <a href="https://impulsefit.netlify.app/" target="__blank">
              here
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  );
}

export function NetflixCloneModal({ showModal, closeModal }) {
  return (
    <div
      className="modal bg-white lg:w-1/3 md:w-3/5 w-5/6 p-4 m-8 rounded-lg fixed top-1/4"
      style={{
        visibility: showModal ? "visible" : "hidden",
        opacity: showModal ? 1 : 0,
      }}
    >
      <div className="modal-info flex flex-col">
        <div className="flex flex-row justify-between items-center mb-4">
          <h4 className="text-left text-lg font-medium">Netflix Clone</h4>
          <p onClick={closeModal} className="cursor-pointer">
            &times;
          </p>
        </div>
        <div className="project-info">
          <p className="font-light text-sm tracking-wide">
          Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.
            <br></br>
            <br></br>
            I have made a static clone for the same you can check it out at{" "}
            {/* <a href="https://github.com/arpanneupane19/Chattr" target="__blank">
              here
            </a>{" "}
            and the app{" "} */}
            <a href="https://clone-net-flix.netlify.app/" target="__blank">
              here
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  );
}


export function SubmitFormModal({ showModal, closeModal }) {
  return (
    <div
      className="modal bg-white lg:w-1/3 md:w-3/5 w-5/6 p-4 m-8 rounded-lg fixed top-1/4"
      style={{
        visibility: showModal ? "visible" : "hidden",
        opacity: showModal ? 1 : 0,
      }}
    >
      <div className="modal-info flex flex-col">
        <div className="flex flex-row justify-between items-center mb-4">
          <h4 className="text-left text-lg font-medium">Survey Form</h4>
          <p onClick={closeModal} className="cursor-pointer">
            &times;
          </p>
        </div>
        <div className="project-info">
          <p className="font-light text-sm tracking-wide">
            Survey Form is a React Js made up the help of AntD library. It performs all the CRUD operations from Creatind to Deletion. I have used{" "}
            {/* <a href="https://python.org" target="__blank">
              Python
            </a>{" "}
            &{" "} */}
            <a
              href="https://flask.palletsprojects.com/en/2.0.x/"
              target="__blank"
            >
              Flask
            </a>{" "}
            for the backend and{" "}
            <a href="https://reactjs.org" target="__blank">
              React
            </a>{" "}
            for the frontend.
            <br></br>
            <br></br>
            Users can add, read, update and delete every entry they do. Check it out {" "}
            <a href="https://github.com/adityadhunna98/Submit-form" target="__blank">
              here
            </a>!
          </p>
        </div>
      </div>
    </div>
  );
}

export function TalkATiveModal({ showModal, closeModal }) {
  return (
    <div
      className="modal bg-white lg:w-1/3 md:w-3/5 w-5/6 p-4 m-8 rounded-lg fixed top-1/4"
      style={{
        visibility: showModal ? "visible" : "hidden",
        opacity: showModal ? 1 : 0,
      }}
    >
      <div className="modal-info flex flex-col">
        <div className="flex flex-row justify-between items-center mb-4">
          <h4 className="text-left text-lg font-medium">Talk - A -Tive</h4>
          <p onClick={closeModal} className="cursor-pointer">
            &times;
          </p>
        </div>
        <div className="project-info">
          <p className="font-light text-sm tracking-wide">
          “Talk - A -Tive” is a ed-tech application to make a community for Istudents based on their field of interest. It will shorten the bridge between students and help them connect and interact better. It uses{" "}
            <a href="https://expressjs.com/" target="__blank">
              Express
            </a>{" "}
            & <a href="https://nodejs.org/en" target="__blank">
              Node
            </a>{" "}
            for the backend and{" "}
            <a href="https://reactjs.org" target="__blank">
              React
            </a>{" "}
            for the frontend.
            <br></br>
            <br></br>
            Check out the git repository{" "}
            <a
              href="https://github.com/adityadhunna98/TalkATive"
              target="__blank"
            >
              here!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}


export function SiteModal({ showModal, closeModal }) {
  return (
    <div
      className="modal bg-white lg:w-1/3 md:w-3/5 w-5/6 p-4 m-8 rounded-lg fixed top-1/4"
      style={{
        visibility: showModal ? "visible" : "hidden",
        opacity: showModal ? 1 : 0,
      }}
    >
      <div className="modal-info flex flex-col">
        <div className="flex flex-row justify-between items-center mb-4">
          <h4 className="text-left text-lg font-medium">This Website</h4>
          <p onClick={closeModal} className="cursor-pointer">
            &times;
          </p>
        </div>
        <div className="project-info">
          <p className="font-light text-sm tracking-wide">
            This is the fourth iteration of my personal website. I built this
            website using{" "}
            <a href="https://reactjs.org" target="__blank">
              React
            </a>{" "}
            and{" "}
            <a href="https://tailwindcss.com/" target="__blank">
              Tailwind CSS
            </a>
            . Check out the git repository{" "}
            <a
              href="https://github.com/arpanneupane19/portfolioWeb"
              target="__blank"
            >
              here
            </a>
            !<br></br>
            <br></br>
            <a href="mailto:adityadhunna98@gmail.com" target="__blank">
              Feel free to leave any feedback!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./Projects.css";
import { ChangeTitle } from "./Home.js";
import ImpuleFit from "./images/impulsefit.png";
import NetflixClone from "./images/NetflixClone.png";
import SubmitForm from "./images/SubmitForm.png";
import TalkATive from "./images/TalkATive.png";
import Website from "./images/website.png";
import {
  ImpulseFit,
  NetflixCloneModal,
  SubmitFormModal,
  TalkATiveModal,
  SiteModal,
} from "./Modal";

function Projects() {
  ChangeTitle();

  // Bloggy hooks
  const [showImpuleFit, setShowImpuleFit] = useState(false);
  const closeImpuleFit = () => setShowImpuleFit(false);

  // NetflixClone hooks
  const [showNetflixClone, setShowNetflixClone] = useState(false);
  const closeNetflixClone = () => setShowNetflixClone(false);

  // SubmitForm hooks
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const closeSubmitForm = () => setShowSubmitForm(false);

  // TalkATive hooks
  const [showTalkATive, setShowTalkATive] = useState(false);
  const closeTalkATive = () => setShowTalkATive(false);

  // Site hooks
  const [showSite, setShowSite] = useState(false);
  const closeSite = () => setShowSite(false);

  return (
    <div className="font-sans antialiased bg-white">
      {showImpuleFit ||
        showNetflixClone ||
        showSubmitForm ||
        showTalkATive ||
        showSite ? (
        <div
          onClick={() =>
            showImpuleFit(false) ||
            setShowNetflixClone(false) ||
            setShowSubmitForm(false) ||
            setShowTalkATive(false) ||
            setShowSite(false)
          }
          className="backdrop"
        ></div>
      ) : null}
      <div className="projects">
        <div className="flex flex-col justify-center items-center pt-36 pb-24 lg:px-16 px-6">
          <p className="projects-header md:text-3xl text-2xl mb-4 font-medium">
            Projects
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1">
          <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
              onClick={() => setShowSite(true)}
            >
              <p className="text-xl text-center font-light mb-2">
                This Website
              </p>
              <img src={Website} alt="Website" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">React</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">Tailwind CSS</p>
                </div>
              </div>
            </div>
          <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
              onClick={() => setShowTalkATive(true)}
            >
              <p className="text-xl text-center font-light mb-2">TalkATive</p>
              <img src={TalkATive} alt="TalkATive" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">React</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">Node</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">Express</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">MongoDB</p>
                </div>
              </div>
            </div>
            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
              onClick={() => setShowImpuleFit(true)}
            >
              <p className="text-xl text-center font-light mb-2">Impulse Fit</p>
              <img src={ImpuleFit} alt="ImpuleFit" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">HTML</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">CSS</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">JavaScript</p>
                </div>
              </div>
            </div>
            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
              onClick={() => setShowNetflixClone(true)}
            >
              <p className="text-xl text-center font-light mb-2">Netflix Clone</p>
              <img src={NetflixClone} alt="Netflix Clone" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">HTML</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">CSS</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">React Js</p>
                </div>
              </div>
            </div>
            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
              onClick={() => setShowSubmitForm(true)}
            >
              <p className="text-xl text-center font-light mb-2">Survey Form</p>
              <img src={SubmitForm} alt="Survey Form" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">React</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">AntD</p>
                </div>
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">Flask</p>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </div>
      <ImpulseFit showModal={showImpuleFit} closeModal={closeImpuleFit} />
      <NetflixCloneModal showModal={showNetflixClone} closeModal={closeNetflixClone} />
      <SubmitFormModal showModal={showSubmitForm} closeModal={closeSubmitForm} />
      <TalkATiveModal showModal={showTalkATive} closeModal={closeTalkATive} />
      <SiteModal showModal={showSite} closeModal={closeSite} />
    </div>
  );
}

export default Projects;

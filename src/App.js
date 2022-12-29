import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {

  
  return (
    <main className="App">
      <section className="navigation-side-bar-styles" id="navigation-side-bar">
        <figure id="my-photo">
          <img
            name="my-personel-photo"
            id="my-personel-photo"
            src="https://media-exp1.licdn.com/dms/image/C5603AQFyImg50pSpeQ/profile-displayphoto-shrink_800_800/0/1660204404508?e=1676505600&v=beta&t=XqlkQQqhMMashRdBeFYfEfVS_y09I_ntUBjuxN8mJtg"
            alt="my-personel-photo"
          ></img>
        </figure>
        <nav>
          <ul>
            <li>
              <a href="#ABOUT">ABOUT</a>
            </li>
            <li>
              <a href="#EDUCATION">EDUCATION</a>
            </li>
            <li>
              <a href="#SKILLS">SKILLS</a>
            </li>
            <li>
              <a href="#CERTIFICATIONS">CERTIFICATIONS</a>
            </li>
            <li>
              <a href="#CONTACT">CONTACT</a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="Portfolio-content-styles" id="Portfolio-content">
        <section id="hero-section">
          <div className="typewriter">
            <h1 id="my-name-animated">Maaroufi Khamais</h1>
          </div>
          <div className="typewriter-subtitle">
            <h1 id="my-name-animated">Web Developer</h1>
          </div>
          <div className="social-media-links" id="links-to-my-social-media">
            <a
              className="icon-for-media"
              href="https://www.facebook.com/kahkhiu/"
              target="_blank"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                alt="my-facebook"
              />
            </a>
            <a
              className="icon-for-media"
              href="https://github.com/khamais-maaroufi"
              target="_blank"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2175/2175377.png"
                alt="my-github"
              />
            </a>
            <a
              className="icon-for-media"
              href="https://www.linkedin.com/in/khemais-maaroufi/"
              target="_blank"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                alt="my-linkedin"
              />
            </a>
          </div>
        </section>

        <section id="ABOUT" className="content-sections">
          <h2>ABOUT ME</h2>
          <p>
            Welcome to my portfolio! I am a highly motivated and experienced
            software developer with a strong foundation in web development
            technologies such as HTML, CSS, and JavaScript. I have practical
            experience working on full stack web projects, including experience
            with the React framework. I also have experience with Git and GitHub
            and have a strong understanding of best practices for working in a
            team and maintaining a codebase. I am a passionate learner and am
            dedicated to producing high-quality work. I am excited to continue
            growing as a developer and to contribute my skills and experience to
            new and challenging projects.
          </p>
        </section>
        <section id="EDUCATION" className="content-sections">
          <h2>EDUCATION</h2>
          <div className="container-insub-section">
            <img
              className="university-logo"
              src="http://www.utm.rnu.tn/utm/images/utm-header.png"
              alt="my-university-logo"
            />
            <div>
              <h3>Bachelor Degree of Computer science</h3>
              <h4>
                Tunis El Manar University, The Higher Institute of Computer
                Science{" "}
              </h4>
              <span>Sep 2019 - Jun 2022</span>
            </div>
          </div>
        </section>
        <section id="SKILLS" className="content-sections">
          <h2>SKILLS</h2>
        </section>
        <section id="CERTIFICATIONS" className="content-sections">
          <h2>CERTIFICATIONS</h2>
        </section>
        <section id="CONTACT" className="content-sections">
          <h2>CONTACT</h2>
        </section>
      </section>
    </main>
  );
};

export default App;

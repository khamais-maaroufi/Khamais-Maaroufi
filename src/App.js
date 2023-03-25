import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const handelRWD = () => {
    window.open(
      "https://www.freecodecamp.org/certification/Khamais-Maaroufi/responsive-web-design"
    );
  };
  const handelJS = () => {
    window.open(
      "https://www.freecodecamp.org/certification/Khamais-Maaroufi/javascript-algorithms-and-data-structures"
    );
  };
  const handelFE = () => {
    window.open(
      "https://www.freecodecamp.org/certification/Khamais-Maaroufi/front-end-development-libraries"
    );
  };

  useEffect(() => {
    let element = document.querySelector(".Portfolio-content-styles");
    element.addEventListener("scroll", function () {
      var scroll = document.querySelector(".topbtnk");
      scroll.classList.toggle("active", element.scrollTop > 300);
    });
    document.getElementById("music").play();
  });
  // useEffect(() => {});
  const ToTop = () => {
    let element = document.querySelector(".Portfolio-content-styles");
    element.scrollTo(0, 0);
  };
  return (
    <main className="App">
      <section className="navigation-side-bar-styles" id="navigation-side-bar">
        <figure id="my-photo">
          <img
            name="my-personel-photo"
            id="my-personel-photo"
            src="https://firebasestorage.googleapis.com/v0/b/my-picture-829e6.appspot.com/o/khamais.jpg?alt=media&token=85e5ce5d-15e8-4fdd-86e7-6955b9fcb5ae"
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
              <a href="#EXPERIENCE">EXPERIENCE</a>
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
          <select name="language" id="language" className="langauges">
            <option value="english">English</option>
            <option value="francais">francais</option>
          </select>
          <audio id="music" controls>
            <source
              src="https://firebasestorage.googleapis.com/v0/b/my-picture-829e6.appspot.com/o/Shkoon_Rima_feat._El_Far3i_Official_Video__LM6H7hmTZK0_140.mp3?alt=media&token=2944a081-2923-4ee7-87c3-21d2b299e8cd"
              type="audio/mp3"
            />
            Your browser does not support the audio element.
          </audio>
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
              src="https://firebasestorage.googleapis.com/v0/b/my-picture-829e6.appspot.com/o/utm-rmg.png?alt=media&token=66deccb5-7151-47f2-993d-1b74f043d840"
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
        <section id="EXPERIENCE" className="content-sections">
          <h2>EXPERIENCE</h2>
          <div
            className="container-insub-section"
            style={{ marginBottom: "2vw" }}
          >
            <img
              className="university-logo"
              src="https://firebasestorage.googleapis.com/v0/b/my-picture-829e6.appspot.com/o/next.png?alt=media&token=1e3fb070-8c3a-4b46-acbe-bae1107722b7"
              alt="Fenix-logo"
            />
            <div>
              <h3>Web Developer </h3>
              <h4>
                Next Consult, Tunis
                <a
                  href="https://www.next.tn"
                  style={{ fontSize: "1.2vw" }}
                  target="_blank"
                >
                  (Official Website)
                </a>{" "}
              </h4>
              <span>01 February 2023 - Today</span>
            </div>
          </div>

          <div
            className="container-insub-section"
            style={{ marginBottom: "2vw" }}
          >
            <img
              className="university-logo"
              src="https://firebasestorage.googleapis.com/v0/b/my-picture-829e6.appspot.com/o/Fenix-Future-Dev-removebg.png?alt=media&token=9e7e8637-1350-4e25-a08b-cde3a1abdc5b"
              alt="Fenix-logo"
            />
            <div>
              <h3>Web Developer (Intern)</h3>
              <h4>
                Fenix Future Dev, Tunis
                <a
                  href="https://www.linkedin.com/company/fenix-future-dev/?trk=similar-pages"
                  style={{ fontSize: "1.2vw" }}
                  target="_blank"
                >
                  (LinkedIn)
                </a>{" "}
              </h4>
              <span>August 2022 - October 2022</span>
            </div>
          </div>
          <div className="container-insub-section">
            <img
              className="university-logo"
              src="https://firebasestorage.googleapis.com/v0/b/my-picture-829e6.appspot.com/o/Horizon_Data-removebg.png?alt=media&token=1287d215-2f04-42eb-8d2e-0c075ba27510"
              alt="horizon-data-logo"
            />
            <div>
              <h3>Web Developer (end of study internship)</h3>
              <h4>
                Horizon Data, Tunis
                <a
                  href="https://www.horizon-data.tn"
                  style={{ fontSize: "1.2vw" }}
                  target="_blank"
                >
                  (Official Website)
                </a>{" "}
              </h4>
              <span>Feb 2022 - Jun 2022</span>
            </div>
          </div>
        </section>
        <section id="SKILLS" className="content-sections">
          <h2>SKILLS</h2>
          <div>
            <h3>
              <b>PROGRAMMING LANGUAGES & TOOLS</b>
            </h3>
            <div className="tech-list">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-picture-829e6.appspot.com/o/html-removebg.png?alt=media&token=7052f384-59e4-4751-8bce-757c9484c0a0"
                alt="html-skill"
              ></img>
              <img
                src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                alt="css-skill"
              ></img>
              <img
                src="https://uploads-ssl.webflow.com/62038ffc9cd2db4558e3c7b7/6242e5dd4337267623f1e7a5_js.svg"
                alt="js-skill"
              ></img>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-picture-829e6.appspot.com/o/bootstrap-removebg.png?alt=media&token=a4fe7fd2-0c87-4152-8440-0f72286b0cdc"
                alt="bootsrap-skill"
              ></img>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/800px-Sass_Logo_Color.svg.png"
                alt="sass-skill"
              ></img>
              <img
                src="https://uploads-ssl.webflow.com/62038ffc9cd2db4558e3c7b7/623b38335c7b880db9eff54d_react.svg"
                alt="react-skill"
              ></img>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
                alt="redux-skill"
              ></img>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-picture-829e6.appspot.com/o/nodejs-removebg.png?alt=media&token=79d56bdb-5405-4929-80ba-e155ee959fe5"
                alt="nodejs-skill"
              ></img>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-picture-829e6.appspot.com/o/mongodb-removebg.png?alt=media&token=0bd4f9f5-0040-4c73-ae41-a9f6eafdcf1f"
                alt="MongoDB-skill"
              ></img>
            </div>
          </div>
          <div>
            <h3 style={{ marginTop: "3vw" }}>
              <b>SERVICES</b>
            </h3>
            <ul id="list-of-services">
              <li>
                <i className="fa-did-not-work">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/294/294432.png"
                    alt="valid"
                  ></img>
                </i>
                I can design and build custom websites for clients using my
                skills in HTML, CSS, and JavaScript.
              </li>

              <li>
                <i className="fa-did-not-work">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/294/294432.png"
                    alt="valid"
                  ></img>
                </i>
                I can develop custom web applications for clients using my
                experience with frameworks such as React.
              </li>

              <li>
                {" "}
                <i className="fa-did-not-work">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/294/294432.png"
                    alt="valid"
                  ></img>
                </i>
                I can provide ongoing support to clients by maintaining and
                updating their existing websites.
              </li>

              <li>
                <i className="fa-did-not-work">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/294/294432.png"
                    alt="valid"
                  ></img>
                </i>
                I can offer training and consulting services to help clients
                learn more about web dev technologies and best practices.
              </li>
            </ul>
          </div>
        </section>
        <section id="CERTIFICATIONS" className="content-sections">
          <h2>CERTIFICATIONS</h2>
          <div className="Field-for-certificate">
            <div
              className="certificate"
              id="rwd-certif"
              name="certificate-responsive-web-design"
              onClick={handelRWD}
            >
              <div className="redirection-button">
                Show credential
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2901/2901214.png"
                  className="icon-redirection"
                ></img>
              </div>
            </div>
            {/*break*/}
            <div
              className="certificate"
              id="js-certif"
              name="certificate-responsive-web-design"
              onClick={handelJS}
            >
              <div className="redirection-button">
                Show credential
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2901/2901214.png"
                  className="icon-redirection"
                ></img>
              </div>
            </div>
            {/*break*/}
            {/*break*/}
            <div
              className="certificate"
              id="fe-certif"
              name="certificate-responsive-web-design"
              onClick={handelFE}
            >
              <div className="redirection-button">
                Show credential
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2901/2901214.png"
                  className="icon-redirection"
                ></img>
              </div>
            </div>
            {/*break*/}
          </div>
        </section>
        <section id="CONTACT" className="content-sections">
          <h2>CONTACT</h2>
          <address>
            <div>
              <img src="https://firebasestorage.googleapis.com/v0/b/my-picture-829e6.appspot.com/o/location-icon-removebg-preview.png?alt=media&token=9708b4e6-8cf2-483e-b12e-67d6e943325d"></img>
              <h4>Tunis, Tunisia</h4>
            </div>
            <div>
              <img src="https://firebasestorage.googleapis.com/v0/b/my-picture-829e6.appspot.com/o/email-icon-removebg-preview.png?alt=media&token=ab4df3a4-0f1b-406d-82f3-702124db4fca"></img>
              <h4>khamais.sil@gmail.com</h4>
            </div>
            <div>
              <img src="https://firebasestorage.googleapis.com/v0/b/my-picture-829e6.appspot.com/o/phone-symbol-golden-removebg-preview.png?alt=media&token=b6e0eadd-9666-4a87-b645-36d9c71a44d1"></img>
              <h4>+216-25 883 997</h4>
            </div>
          </address>
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
        <div className="topbtnk" onClick={ToTop}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/6469/6469473.png"
            alt="scrollTop"
          ></img>
        </div>
      </section>
    </main>
  );
};

export default App;

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
  
  useEffect(() => {
    let element = document.querySelector(".Portfolio-content-styles");
    element.addEventListener("scroll", function () {
      var scroll = document.querySelector(".topbtnk");
      scroll.classList.toggle("active", element.scrollTop > 300);
    });
  });
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
              src="https://firebasestorage.googleapis.com/v0/b/my-picture-829e6.appspot.com/o/download.png?alt=media&token=ceecc8f2-23f3-46f2-847a-e1c4cae689d8"
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
          <div className="container-insub-section">
            <img
              className="university-logo"
              src="https://www.horizon-data.tn/wp-content/uploads/2021/02/imageedit_1_8941922998.png"
              alt="my-university-logo"
            />
            <div>
              <h3>Web Developer (end of study internship)</h3>
              <h4>
                Horizon Data, Tunis
                <a href="https://www.horizon-data.tn" style={{fontSize:"1.2vw"}} target="_blank">
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
                src="data:image/png;base64,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"
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
                src="data:image/png;base64,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"
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHf3zDP10If3lMONwl7DUJM-hgR9EGZoaVfQEOCdkLG9jkLZedn_tX24vxArc9OHVNaY&usqp=CAU"
                alt="nodejs-skill"
              ></img>
              <img
                src="data:image/png;base64,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"
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
                I can design and build custom websites for clients using my skills in HTML, CSS, and JavaScript.
              </li>

              <li>
                <i className="fa-did-not-work">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/294/294432.png"
                    alt="valid"
                  ></img>
                </i>
                I can develop custom web applications for clients using my experience with frameworks such as React.
              </li>

              <li>
                {" "}
                <i className="fa-did-not-work">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/294/294432.png"
                    alt="valid"
                  ></img>
                </i>
                I can provide ongoing support to clients by maintaining and updating their existing websites.
              </li>

              <li>
                <i className="fa-did-not-work">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/294/294432.png"
                    alt="valid"
                  ></img>
                </i>
                I can offer training and consulting services to help clients learn more about web dev technologies and best practices.
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
          </div>
        </section>
        <section id="CONTACT" className="content-sections">
          <h2>CONTACT</h2>
          <address>
 <div className="add-info"> <a href="mailto:info@example.com">khamais.sil@gmail.com</a></div>
 <div className="add-info"> <a href="tel:1234567890">+216-25883997</a></div>
 <div className="add-info"><a href="https://maps.google.com/?q=123+Main+St">Tunis, Tunisia</a></div> 
          </address>
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

import { BsGithub, BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

import "./HomeSec.scss";

import { useInView } from "react-intersection-observer";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../../App";
import { useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HomeSec = () => {
  const location = useLocation();
  const outerdivRef = useRef();
  const innerdivRef = useRef();
  const profileimageshadowRef = useRef();
  const { innerMouseRef, outerMouseRef } = useContext(AppContext);
  const { ref: lastNameRef, inView: lastNameInView } = useInView({});
  const { ref: firstNameRef, inView: firstNameInView } = useInView({});
  const { ref: smallAboutRef, inView: smallAboutInView } = useInView({});
  const { ref: bioRef, inView: bioInView } = useInView({});
  const { ref: socialMediaRef, inView: socialMediaInView } = useInView({});
  const { ref: resumeRef, inView: resumeInView } = useInView({});

  const addNameToCursor = (name) => {
    innerMouseRef.current.innerHTML = name;
  };
  const removeNameFromCursor = () => {
    innerMouseRef.current.innerHTML = "";
  };
  const socialMediaLinks = document.querySelectorAll(".social-media-link");
  const socialMediaLinksArray = Array.from(socialMediaLinks);
  socialMediaLinksArray.forEach((link) => {
    link.addEventListener("mouseover", () => {
      outerMouseRef.current.classList.add("social-media-outer");
      innerMouseRef.current.classList.add("social-media-inner");
    });
    link.addEventListener("mouseout", () => {
      outerMouseRef.current.classList.remove("social-media-outer");
      innerMouseRef.current.classList.remove("social-media-inner");
    });
  });

  useEffect(() => {
    outerdivRef.current.addEventListener("mouseover", () => {
      innerdivRef.current.style.transform = " rotate(-45deg) scale(1)";
      profileimageshadowRef.current.style.scale = "1";
    });
  }, []);

  useEffect(() => {
    const handleRemoveName = () => {
      setTimeout(() => {
        removeNameFromCursor();
        outerMouseRef.current.classList.remove("social-media-outer");
        innerMouseRef.current.classList.remove("social-media-inner");
      }, 900);
    };
    window.addEventListener("scroll", handleRemoveName);
  }, []);

  return (
    <section className="Home">
      <div className="homeContainer sectionContainer">
        <div className="profile-container">
          <div
            data-aos="zoom-in"
            ref={outerdivRef}
            className="profile-image-outerdiv"
          >
            <LazyLoadImage
              data-aos="zoom-in"
              data-aos-delay="300"
              src="/assets/profiles/blur3.webp"
              id="profile-image"
              className="profile-image"
              width={350}
              height={500}
              alt=""
            />
          </div>
        </div>
        <div className="personal-information-container">
          <div className="personal-information">
            <div className="information">
              <div className="greeting">
                <div className="greetingColor"></div>
                <h2 className="greeting-text">Hi , I'm </h2>
              </div>
              <h2
                ref={firstNameRef}
                className={`my-name ${firstNameInView ? "translate" : ""}`}
              >
                Sourav{" "}
                <p
                  ref={lastNameRef}
                  className={`slider ${
                    lastNameInView ? "lastNameAnimation" : ""
                  }`}
                >
                  <span className={`last-name`}>Goyal</span>
                </p>
              </h2>
              <div
                ref={smallAboutRef}
                className={`small-about ${
                  smallAboutInView ? "translate2" : ""
                }`}
              >
                <h2>I'm a</h2>
                <div>
                  <h2>Programmer</h2>
                  <h2>Frontend Developer</h2>
                  <h2>BCA Student</h2>
                  <h2>Freelencer</h2>
                  <h2>Programmer</h2>
                </div>
              </div>
              <p
                ref={bioRef}
                className={`bio ${bioInView ? "translate3" : ""}`}
              >
                I'm a passionate and dedicated Frontend Developer with a strong
                focus on user experience. I'm currently focused on building
                responsive and accessible web applications. I'm also interested
                in learning new technologies and solving problems.
              </p>
            </div>
            <div
              ref={socialMediaRef}
              className={`social-media ${
                socialMediaInView ? "translate4" : ""
              }`}
            >
              <a
                className="social-media-link"
                onMouseLeave={() => removeNameFromCursor()}
                onMouseEnter={() => {
                  addNameToCursor("Visit my Github profile");
                }}
                href="https://github.com/Sourav-Goyal19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <BsGithub size={29} />
              </a>
              <a
                className="social-media-link"
                onMouseLeave={() => removeNameFromCursor()}
                onMouseEnter={() => {
                  addNameToCursor("Connect with me on LinkedIn");
                }}
                href="https://www.linkedin.com/in/sourav-goyal-0555a51b4/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <AiFillLinkedin size={29} />
              </a>
              <a
                className="social-media-link"
                onMouseLeave={() => removeNameFromCursor()}
                onMouseEnter={() => {
                  addNameToCursor("Follow me on Instagram");
                }}
                href="https://www.instagram.com/goyalsourav8893/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <BsInstagram size={24} />
              </a>
            </div>
          </div>
          <a
            ref={resumeRef}
            target="_blank"
            rel="noopener noreferrer"
            download={true}
            className={`resume-btn ${resumeInView ? "translate5" : ""}`}
            href="/assets/Resume.pdf"
          >
            Download <span>Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSec;

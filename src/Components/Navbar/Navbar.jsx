import "./Navbar.scss";

import { useLocation } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../App";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Navbar = (props) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [navLinksActive, setNavLinksActive] = useState(false);
  const [backgroundActive, setBackgroundActive] = useState(false);
  const location = useLocation();
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      document.querySelector("nav").style.borderBottom = "1px solid #ffffff1a";
    } else {
      document.querySelector("nav").style.borderBottom = "none";
    }
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".Name,.nav-links", {
      y: -200,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    });
  }, []);
  useEffect(() => {
    if (location.pathname === "/projects") {
      document.querySelector("nav").style.background = "#212428";
    } else {
      document.querySelector("nav").style.background = "#1e2024";
    }
  }, [location]);

  return (
    <nav className="Navbar">
      <div
        className={`background ${backgroundActive ? "backgroundActive" : ""}`}
      ></div>
      <div className="Name">
        <a
          onClick={() => {
            props.pageAnimation("Home", "");
          }}
          href="#"
        >
          Sourav Goyal
        </a>
      </div>
      <div className={`nav-links ${navLinksActive ? "nav-linksActive" : ""}`}>
        <a
          href="#"
          onClick={() => {
            props.pageAnimation("Home", ""),
              setBackgroundActive(false),
              setHamburgerActive(false),
              setNavLinksActive(false);
          }}
          className="nav-link"
        >
          Home
        </a>
        <a
          href="#"
          onClick={() => {
            props.pageAnimation("About", "about"),
              setBackgroundActive(false),
              setHamburgerActive(false),
              setNavLinksActive(false);
          }}
          className="nav-link"
        >
          About
        </a>
        <a
          href="#"
          onClick={() => {
            props.pageAnimation("Projects", "projects"),
              setBackgroundActive(false),
              setHamburgerActive(false),
              setNavLinksActive(false);
          }}
          className="nav-link"
        >
          Projects
        </a>
        <a
          href="#"
          onClick={() => {
            props.pageAnimation("Contact", "contact"),
              setBackgroundActive(false),
              setHamburgerActive(false),
              setNavLinksActive(false);
          }}
          className="nav-link"
        >
          Contact
        </a>
      </div>
      <div
        onClick={(e) => {
          setHamburgerActive(!hamburgerActive);
          setBackgroundActive(!backgroundActive);
          setTimeout(() => {
            setNavLinksActive(!navLinksActive);
          }, 800);
        }}
        className={`hamburger ${
          hamburgerActive ? "hamburgerActive" : "hamburgerNotActive"
        }`}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./HomeNav.css";
import { Link } from "react-scroll";

function HomeNav() {
  const showlist = () => {
    let menu = document.getElementById("menu");
    let actions = document.getElementById("actions");
    menu.classList.toggle("is-active");
    actions.classList.toggle("is-active");
  };
  return (
    <nav>
      <h2 className="mou">
        Proffesional<span className="rafei">CV</span>
      </h2>
      <ul id="actions">
        <li>
          <Link
            to="home-destination"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about-destination"
            spy={true}
            smooth={true}
            duration={500}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="services-destination"
            spy={true}
            smooth={true}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="skills-destination"
            spy={true}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="contact-destination"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact US
          </Link>
        </li>
      </ul>
      <button
        title="attribute"
        id="menu"
        onClick={() => {
          showlist();
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default HomeNav;

import { useState } from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";

import home from "img/home.png";
import projects from "img/projects.png";
import about from "img/about.png";

const Navigation = (props) => {
  const [expanNavBool, setExpanNav] = useState(false);

  const expanShrink = (event) => {
    expanNavBool ? setExpanNav(false) : setExpanNav(true);
    props.onClickToggleMainContent(event.target);
  };

  return (
    <nav className={expanNavBool ? "nav nav--expanded" : "nav"}>
      <button
        type="button"
        className={expanNavBool ? "nav-btn nav--expanded-btn" : "nav-btn"}
        onClick={expanShrink}
      >
        {expanNavBool ? "<" : ">"}
      </button>
      <ul className="nav-list">
        <li className="nav-list-item">
          <NavLink to="/home" className="nav-list-item-link">
            <img src={home} alt="home" className="nav-list-item-link-logo" />
            <h4
              className={
                expanNavBool
                  ? "nav-list-item-link-text--expanded"
                  : "nav-list-item-link-text"
              }
            >
              Home
            </h4>
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink to="/projects" className="nav-list-item-link">
            <img
              src={projects}
              alt="projects"
              className="nav-list-item-link-logo"
            />
            <h4
              className={
                expanNavBool
                  ? "nav-list-item-link-text--expanded"
                  : "nav-list-item-link-text"
              }
            >
              Projects
            </h4>
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink to="/about" className="nav-list-item-link">
            <img src={about} alt="about" className="nav-list-item-link-logo" />
            <h4
              className={
                expanNavBool
                  ? "nav-list-item-link-text--expanded"
                  : "nav-list-item-link-text"
              }
            >
              About
            </h4>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

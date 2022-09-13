import { useState } from "react";
import "./Navigation.scss";

import home from "./../img/home.png";
import projects from "./../img/projects.png";
import about from "./../img/about.png";

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
        {expanNavBool ? "Shrink Nav" : "Expan Nav"}
      </button>
      <ul className="nav-list">
        <li className="nav-list-item active">
          <a href="/home" className="nav-list-item-link">
            <img src={home} alt="home" className="nav-list-item-link-logo" />
            <h4 className="nav-list-item-link-text">Home</h4>
          </a>
        </li>
        <li className="nav-list-item">
          <a href="/projects" className="nav-list-item-link">
            <img
              src={projects}
              alt="home"
              className="nav-list-item-link-logo"
            />
            <h4 className="nav-list-item-link-text">Projects</h4>
          </a>
        </li>
        <li className="nav-list-item">
          <a href="/about" className="nav-list-item-link">
            <img src={about} alt="about" className="nav-list-item-link-logo" />
            <h4 className="nav-list-item-link-text visible">About</h4>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

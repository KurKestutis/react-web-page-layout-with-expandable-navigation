import { useState, className } from "react";
import "./Navigation.scss";

const Navigation = (props) => {
  const [expan, setExpan] = useState(false);

  const expanShrink = (props) => {
    expan ? setExpan(false) : setExpan(true);
  };

  return (
    <nav
      className={
        expan ? (className = "nav nav--expanded") : (className = "nav")
      }
    >
      <button
        type="button"
        className={`'nav-btn', ${
          expan
            ? (className = "nav-btn nav--expanded-btn")
            : (className = "nav-btn")
        }`}
        onClick={expanShrink}
      >
        Expan Nav
      </button>
    </nav>
  );
};

export default Navigation;

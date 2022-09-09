import { useState, classNames } from "react";
import "./Navigation.scss";

const Navigation = (props) => {
  const [expan, setExpan] = useState(false);

  const expanShrink = (props) => {
    console.log(`btn expanShrink pushed`);
    expan ? setExpan(false) : setExpan(true);
  };

  return (
    <nav
      className={
        expan ? (classNames = "nav nav--expanded") : (classNames = "nav")
      }
    >
      <button
        type="button"
        className={`'nav-btn', ${
          expan
            ? (classNames = "nav-btn nav--expanded-btn")
            : (classNames = "nav-btn")
        }`}
        onClick={expanShrink}
      >
        Expan Nav
      </button>
    </nav>
  );
};

export default Navigation;

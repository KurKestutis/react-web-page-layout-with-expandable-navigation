import { useState } from "react";
import "./Navigation.scss";

const Navigation = (props) => {
  const [expan, setExpan] = useState(false);

  const expanShrink = (props) => {
    expan ? setExpan(false) : setExpan(true);
  };

  return (
    <nav className={expan ? "nav nav--expanded" : "nav"}>
      <button
        type="button"
        className={expan ? "nav-btn nav--expanded-btn" : "nav-btn"}
        onClick={expanShrink}
      >
        Expan Nav
      </button>
    </nav>
  );
};

export default Navigation;

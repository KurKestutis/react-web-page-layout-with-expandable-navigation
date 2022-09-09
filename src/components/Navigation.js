import { useState } from "react";
import "./Navigation.scss";

const Navigation = (props) => {
  const [expanNav, setExpanNav] = useState(false);

  const expanShrink = (event) => {
    expanNav ? setExpanNav(false) : setExpanNav(true);
    props.onClickToggleMainContent(event.target);
  };

  return (
    <nav className={expanNav ? "nav nav--expanded" : "nav"}>
      <button
        type="button"
        className={expanNav ? "nav-btn nav--expanded-btn" : "nav-btn"}
        onClick={expanShrink}
      >
        Expan Nav
      </button>
    </nav>
  );
};

export default Navigation;

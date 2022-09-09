import "./App.scss";
import Navigation from "./components/Navigation.js";
import Main from "./components/Main.js";
import Header from "./components/Header.js";
import { useState } from "react";

function App(props) {
  const [narrowContend, setNarrowContend] = useState(false);

  const shinkContent = (props) => {
    narrowContend ? setNarrowContend(false) : setNarrowContend(true);
    console.log(
      `narrowContend ? setNarrowContend(false) : setNarrowContend(true);`
    );
  };
  return (
    <div className="App">
      <Navigation onClickToggleMainContent={shinkContent} />
      <div
        className={
          narrowContend ? "main-content-wraper--shrink" : "main-content-wraper"
        }
      >
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;

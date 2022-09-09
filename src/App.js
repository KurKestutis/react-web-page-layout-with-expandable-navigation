import "./App.scss";
import Navigation from "./components/Navigation.js";
import Main from "./components/Main.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import { useState } from "react";

function App(props) {
  const [narrowContend, setNarrowContend] = useState(false);

  const shrinkContent = (props) => {
    narrowContend ? setNarrowContend(false) : setNarrowContend(true);
    console.log(
      `narrowContend ? setNarrowContend(false) : setNarrowContend(true);`
    );
  };
  return (
    <div className="App">
      <Navigation onClickToggleMainContent={shrinkContent} />
      <div
        className={
          narrowContend
            ? "main-content-wraper main-content-wraper--shrink"
            : "main-content-wraper"
        }
      >
        <Header />
        <Main className="main" />
        <Footer />
      </div>
    </div>
  );
}

export default App;

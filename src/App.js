import "./App.scss";
import Navigation from "./components/MainLayoutComponents/Navigation.js";
import Main from "./components/MainLayoutComponents/Main.js";
import Header from "./components/MainLayoutComponents/Header.js";
import Footer from "./components/MainLayoutComponents/Footer.js";
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

import "./App.scss";

import Navigation from "components/MainLayoutComponents/Navigation";
import Main from "components/MainLayoutComponents/Main";
import Header from "components/MainLayoutComponents/Header";
import Footer from "components/MainLayoutComponents/Footer";
import { useState } from "react";

function App(props) {
  const [narrowContend, setNarrowContend] = useState(false);

  const shrinkContent = (props) => {
    narrowContend ? setNarrowContend(false) : setNarrowContend(true);
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

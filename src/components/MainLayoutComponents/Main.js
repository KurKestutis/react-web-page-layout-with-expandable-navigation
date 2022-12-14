import "./Main.scss";

import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import NotFound from "../Pages/NotFound";

import { Routes, Route, Navigate } from "react-router-dom";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;

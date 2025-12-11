import React, { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";

export default function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="container">
      <Navbar toggleTheme={toggleTheme} dark={dark} />
      <Home />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}
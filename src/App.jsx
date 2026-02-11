import { useState } from "react";
import React from "react";
import About from "./components/About/About.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/hero.jsx";

import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;

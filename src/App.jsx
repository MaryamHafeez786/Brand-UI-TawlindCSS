import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Hero from "../src/components/Hero/Hero";
import Packages from "./components/Packages/Packages";
import Videos from "./components/Videos/Video";
import Sales from "./components/Sales/Sales";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Packages />
      <Videos />
      <Sales />
    </>
  );
};

export default App;

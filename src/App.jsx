import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import ButtonPrimary from "./components/ButtonPrimary/ButtonPrimary";
import Hero from "../src/components/Hero/Hero";
import heroimg from "./assets/heroimg1.svg";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default App;

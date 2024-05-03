import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Hero from "../src/components/Hero/Hero";
import Packages from "./components/Packages/Packages";
import Videos from "./components/Videos/Video";
import Sales from "./components/Sales/Sales";
import Watchs from "./components/Watchs/Watchs";
import Education from "./components/Education/Education";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Packages />
      <Videos />
      <Sales />
      <Watchs />
      <Education />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;

import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div className="bg-background1 md:bg-contain">
      <Header />
      <Hero />
      <About />
      <Services />
      <Experience />

      {/* <Projects /> */}
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Properties from "./components/Properties";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Properties />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;

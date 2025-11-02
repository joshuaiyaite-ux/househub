import React from "react";
import "../styles/About.css";
import aboutImg from "../assets/pic2.jpg";

function About() {
  return (
    <section className="about">
      <div className="about-img">
        <img src={aboutImg} alt="Agents working" />
      </div>
      <div className="about-text">
        <h2>About HouseHub</h2>
        <p>
          We connect home buyers with trusted agents and verified properties.
          Whether you’re buying or renting, HouseHub simplifies your journey
          from search to move-in.
        </p>
      </div>
    </section>
  );
}

export default About;

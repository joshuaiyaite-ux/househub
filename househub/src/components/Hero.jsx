import React from "react";
import "../styles/Hero.css";
import heroImg from "../assets/pic1.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Find Your Dream Home with <span>HouseHub</span></h1>
        <p>Discover affordable, modern, and verified listings across Kenya.</p>
        <button className="btn-primary">Explore Listings</button>
      </div>
      <div className="hero-img">
        <img src={heroImg} alt="Beautiful House" />
      </div>
    </section>
  );
}

export default Hero;

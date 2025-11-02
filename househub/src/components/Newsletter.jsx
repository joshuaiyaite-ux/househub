import React from "react";
import "../styles/Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Get Exclusive Discounts & Updates</h2>
      <p>Sign up to receive new property alerts directly in your inbox.</p>
      <div className="newsletter-box">
        <input type="email" placeholder="Enter your email address" />
        <button className="btn-primary">Subscribe</button>
      </div>
    </section>
  );
}

export default Newsletter;

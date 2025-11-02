import React from "react";
import "../styles/Testimonials.css";
import data from "../data/testimonials.json";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-list">
        {data.map((item) => (
          <div key={item.id} className="testimonial-card">
            <img src={process.env.PUBLIC_URL + item.image} alt={item.name} />
            <p>"{item.comment}"</p>
            <h4>- {item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

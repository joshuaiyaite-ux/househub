import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Wanjiku",
    text: "HouseHub helped me find my dream apartment very fast. Great service and great listings!",
    image: require("../assets/pic1.jpg")
  },
  {
    id: 2,
    name: "Mark Otieno",
    text: "I love how easy it was to browse homes. The customer support was also amazing!",
    image: require("../assets/pic2.jpg")
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2>What People Say</h2>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <img src={item.image} alt={item.name} className="testimonial-image" />
            <p className="testimonial-text">{item.text}</p>
            <h4 className="testimonial-name">{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

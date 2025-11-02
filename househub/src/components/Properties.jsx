import React from "react";
import "../styles/Properties.css";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";

function Properties() {
  const homes = [
    { id: 1, title: "Modern Villa", price: "KES 25M", img: pic3 },
    { id: 2, title: "Luxury Apartment", price: "KES 15M", img: pic4 },
    { id: 3, title: "Family Bungalow", price: "KES 10M", img: pic5 },
  ];

  return (
    <section className="properties">
      <h2>Featured Properties</h2>
      <div className="property-grid">
        {homes.map((h) => (
          <div className="property-card" key={h.id}>
            <img src={h.img} alt={h.title} />
            <h3>{h.title}</h3>
            <p>{h.price}</p>
            <button className="btn-primary">View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Properties;

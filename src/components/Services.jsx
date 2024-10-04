// src/components/services.jsx
import React from "react";

// Array to hold services data
const servicesData = [
  { id: 1, title: "Software and Hi-Tech", img: "/images/services-1.png" },
  {
    id: 2,
    title: "Financial Services and Banking",
    img: "/images/services-2.png",
  },
  { id: 3, title: "Consumer and Commerce", img: "/images/services-3.png" },
  { id: 4, title: "Legal Tech", img: "/images/services-4.png" },
  { id: 5, title: "Fantasy Sports", img: "/images/services-5.png" },
  { id: 6, title: "Property Tech", img: "/images/services-6.png" },
];

const Services = () => {
  return (
    <div className="services-grid">
      {servicesData.map((service) => (
        <div key={service.id} className="service-item">
          <div className="services">
            {/* Title moved to h3 for better structure */}
            <h3 className="service-title">{service.title}</h3>
            <picture className="service-img">
              <img src={service.img} alt={service.title} />
            </picture>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;

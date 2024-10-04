// src/components/Testimonials.jsx
import React from "react";

const testimonialsData = [
  { id: 1, text: "Great service!", name: "Customer One" },
  { id: 2, text: "Very satisfied with the results.", name: "Customer Two" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <img src="/images/tt.jpg" alt={testimonial.name} />
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

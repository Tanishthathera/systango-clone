// src/components/Industries.jsx
import React from "react";

const industriesData = [
  { id: 1, title: "Industry One" },
  { id: 2, title: "Industry Two" },
];

const Industries = () => {
  return (
    <section id="industries" className="industries">
      <h2>Industries We Serve</h2>
      <div className="industries-grid">
        {industriesData.map((industry) => (
          <div key={industry.id} className="industry-item">
            <img src="/images/tt.jpg" alt={industry.title} />
            <h3>{industry.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;

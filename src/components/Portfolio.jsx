// src/components/Portfolio.jsx
import React from "react";

const portfolioData = [
  { id: 1, title: "Project One" },
  { id: 2, title: "Project Two" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Our Portfolio</h2>
      <div className="portfolio-grid">
        {portfolioData.map((project) => (
          <div key={project.id} className="portfolio-item">
            <img src="/images/tt.jpg" alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

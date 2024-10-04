// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import Industries from "../components/Industries";
import Portfolio from "../components/Portfolio";
import Blog from "../components/Blog";

const Hero = () => {
  return (
    <>
      <section
        className="hero-section"
        style={{ backgroundImage: "url('/images/background tec.avif')" }} // Added background image inline
      >
        <div className="container hero-container">
          <div className="row hero-row">
            <div className="col-md-6 hero-image-wrapper">
              <img
                className="hero-image"
                src="/images/T2_logo.png"
                alt="Image"
              />
            </div>
            <div className="col-md-6 hero-content">
              <h1 className="hero-heading">
                Award-Winning Digital Engineering Company.
              </h1>
              <p className="hero-description">
                We design and deliver digital experiences, and software products
                and reinvent your applications, infrastructure, and processes
                for greater agility by taking full advantage of Blockchain,
                Generative AI, Automation, and Cloud.
              </p>
              <p className="hero-subtext">
                With a boutique mindset, we love working with start-ups as well
                as enterprises alike.
              </p>
              <div className="hero-button-wrapper">
                <Link className="action-button" to="/contact">
                  <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={() => console.log("clicked")}
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Industries />
      <Portfolio />
      <Blog />
    </>
  );
};

export default Hero;

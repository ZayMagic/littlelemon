import React from 'react';
import delicious_appetizers from "./assets/restaurant chef B.jpg"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon<br /><span>Chicago</span></h1>
        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <button className="reserve-button">Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src={delicious_appetizers} alt="Delicious appetizers" />
      </div>
    </section>
  );
};

export default Hero;

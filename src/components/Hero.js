import React from 'react';
import { useNavigate } from 'react-router-dom';
import delicious_appetizers from "./assets/restaurant chef B.jpg"

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon<br /><span>Chicago</span></h1>
        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <button className="reserve-button" onClick={()=> navigate('/booking')}>Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src={delicious_appetizers} alt="Delicious appetizers" />
      </div>
    </section>
  );
};

export default Hero;
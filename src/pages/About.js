import React from 'react';
import chefA from '../assets/Mario and Adrian A.jpg';
import chefB from '../assets/Mario and Adrian b.jpg';

const About = () => {
  return (
    <section className="about-section" style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>About Little Lemon</h1>
      <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
        We are a family-owned Mediterranean restaurant in Chicago, focused on traditional recipes served with a modern twist. Our chefs Mario and Adrian are passionate about crafting memorable meals with fresh, local ingredients.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <img src={chefA} alt="Chef Mario and Adrian A" style={{ width: '300px', borderRadius: '1rem' }} />
        <img src={chefB} alt="Chef Mario and Adrian B" style={{ width: '300px', borderRadius: '1rem' }} />
      </div>
    </section>
  );
};

export default About;

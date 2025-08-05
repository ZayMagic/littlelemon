import React from 'react';
import Specials from '../components/Specials';

const Menu = () => {
  return (
    <>
      <h1 style={styles.heading}>Our Full Menu</h1>
      <div style={styles.specialsWrapper}>
        <Specials />
      </div>
    </>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f8f8f8',
    minHeight: '100vh',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '2.5rem',
    color: '#333',
  },
  specialsWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
};

export default Menu;

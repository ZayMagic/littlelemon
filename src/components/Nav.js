import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import iconHamburger from '../assets/🦆 icon _hamburger menu_.svg';
import homeIcon from '../assets/home icon.svg';
import dishIcon from '../assets/Dish icon.svg';
import creditCardIcon from '../assets/creditcard.svg';
import basketIcon from '../assets/Basket.svg';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" style={{ padding: '1rem', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src={logo} alt="Little Lemon Logo" className="logo" style={{ height: '40px' }} />
        <img
          src={iconHamburger}
          alt="Toggle Menu"
          className="hamburger"
          onClick={toggleNav}
          style={{ width: '30px', cursor: 'pointer' }}
        />
      </div>

      <ul
        className="nav-links"
        style={{
          listStyle: 'none',
          padding: 0,
          display: isOpen ? 'block' : 'none',
          marginTop: '1rem',
          textAlign: 'left',
        }}
      >
        <li><Link to="/"><img src={homeIcon} alt="" style={{ width: '20px', marginRight: '10px' }} />Home</Link></li>
        <li><Link to="/about"><img src={dishIcon} alt="" style={{ width: '20px', marginRight: '10px' }} />About</Link></li>
        <li><Link to="/menu"><img src={basketIcon} alt="" style={{ width: '20px', marginRight: '10px' }} />Menu</Link></li>
        <li><Link to="/booking"><img src={dishIcon} alt="" style={{ width: '20px', marginRight: '10px' }} />Reservations</Link></li>
        <li><Link to="/order"><img src={creditCardIcon} alt="" style={{ width: '20px', marginRight: '10px' }} />Order Online</Link></li>
        <li><Link to="/login"><img src={creditCardIcon} alt="" style={{ width: '20px', marginRight: '10px' }} />Login</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;

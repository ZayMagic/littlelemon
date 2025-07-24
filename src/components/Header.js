import React from 'react';
import Nav from './Nav';
import Hero from './Hero'

const Header = () => {
return(
    <header className="header">
        <Nav />
        <Hero />
    </header>
);
};

export default Header;
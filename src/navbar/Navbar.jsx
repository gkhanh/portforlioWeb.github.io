import React from 'react';
import '../style/style.css'
import '../style/mediaqueries.css';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav id="desktop-nav">
            <div className="logo">Khanh Le</div>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skill">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;

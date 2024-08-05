import React, { useState } from 'react';
import './HamburgerMenu.css'

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav id="hamburger-nav">
            <div className="logo">John Doe</div>
            <div className="hamburger-menu">
                <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`menu-links ${isOpen ? 'open' : ''}`}>
                    <li><a href="#about" onClick={toggleMenu}>About</a></li>
                    <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                    <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default HamburgerMenu;

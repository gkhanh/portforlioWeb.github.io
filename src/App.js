import './App.css';
import React from 'react';
import Navbar from './navbar/Navbar';
import HamburgerMenu from './hamburger_menu/HamburgerMenu';
import Profile from './profile/Profile';
import './style/style.css'
import './style/mediaqueries.css'
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";


function App() {
  return (
      <div className="App">
        {/* Navbar for desktop view */}
        <Navbar />
        {/* Hamburger menu for mobile view */}
        <HamburgerMenu />
        {/* Profile Section */}
        <Profile />
        {/* About Section */}
        <About />
        {/* Skills Section */}
        <Skills />
        {/* Projects Section */}
        <Projects />
        {/* Contact Section */}
        <Contact />
        {/* Footer */}
        <Footer />
      </div>
  );
}

export default App;


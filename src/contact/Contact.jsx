import React from 'react';
import emailIcon from '../assets/email.png';
import linkedinIcon from '../assets/linkedin.png';
import './Contact.css'
import upArrowIcon from "../assets/up-arrow.png";

const Contact = () => (
    <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
            <div className="contact-info-container">
                <img
                    src={emailIcon}
                    alt="Email icon"
                    className="icon contact-icon email-icon"
                />
                <p><a href="mailto:examplemail@gmail.com">gkhanhle52@gmail.com</a></p>
            </div>
            <div className="contact-info-container">
                <img
                    src={linkedinIcon}
                    alt="LinkedIn icon"
                    className="icon contact-icon"
                />
                {/*<p><a href="https://www.linkedin.com/in/gkhanhle/">LinkedIn</a></p>*/}
                <p><a href="https://www.linkedin.com/in/gkhanhle/" target="_blank"
                      rel="noopener noreferrer">LinkedIn</a>
                </p>
            </div>
        </div>
        {/*<div className="arrow-container">*/}
        {/*    <img*/}
        {/*        src={upArrowIcon}*/}
        {/*        alt="Arrow icon"*/}
        {/*        className="icon top-arrow"*/}
        {/*        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}*/}
        {/*    />*/}
        {/*</div>*/}
        <img
            src={upArrowIcon}
            alt="Arrow icon"
            className="icon top-arrow"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        />
    </section>
);

export default Contact;

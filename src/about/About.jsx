import React from 'react';
import { IoLanguageOutline } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";
import arrowIcon from '../assets/down-arrow.png';
import './About.css'

const About = () => (
    <section id="about">
        <p className="section__text__p1">Introduction</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
            <div className="about-details-container">
                <div className="about-containers">
                    <div className="details-container">
                        <IoLanguageOutline className="icon"/>
                        <h3>Languages</h3>
                        <p>English (Fluent)<br/>Vietnamese (Fluent)<br/>Dutch (Beginner)</p>
                    </div>
                    <div className="details-container">
                        <RiGraduationCapFill className="icon"/>
                        <h3>Education</h3>
                        <p>B.Sc. Applied Computer Science<br/>Saxion University of Applied Science</p>
                    </div>
                </div>
                <div className="text-container">
                    <p>
                        Hi, I'm Khanh Le, a dedicated student of Applied Computer Science at
                        Saxion University of Applied Sciences in the Netherlands. With a deep
                        passion for coding, I am captivated by the boundless opportunities
                        in software development. I love exploring new technologies and I am
                        eager to carve out a career as a software engineer, bringing innovative
                        ideas to life.
                    </p>
                </div>
            </div>
        </div>
        <img
            src={arrowIcon}
            alt="Arrow icon"
            className="icon arrow"
            onClick={() => window.location.href = '#skill'}
        />
    </section>
);

export default About;

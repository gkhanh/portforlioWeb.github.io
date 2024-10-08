import React from 'react';
import arrowIcon from '../assets/down-arrow.png';
import project1Image from '../assets/project1-img.png';
import project2Image from '../assets/images.png';
import project3Image from '../assets/cloudy.png';

import './Projects.css'

const Projects = () => (
    <section id="projects">
        <p className="section__text__p1">Browse My</p>
        <h1 className="title">Projects</h1>
        <div className="skill-details-container">
            <div className="about-containers">
                <div className="project-details-container color-container">
                    <div className="img-container">
                        <img
                            src={project1Image}
                            alt="Project 1"
                            className="project-img"
                        />
                    </div>
                    <h2 className="skill-sub-title project-title">Finance Tracking Web</h2>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => window.open('https://github.com/gkhanh/FinanceTracker.git', '_blank', 'noopener,noreferrer')}
                        >
                            Github
                        </button>
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => window.open('https://financetrackingwebapplication.azurewebsites.net/', '_blank', 'noopener,noreferrer')}
                        >
                            Live Demo
                        </button>
                    </div>
                </div>
                <div className="project-details-container color-container">
                    <div className="img-container">
                        <img
                            src={project2Image}
                            alt="Project 2"
                            className="project-img"
                        />
                    </div>
                    <h2 className="skill-sub-title project-title">Pose Detection App</h2>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => window.open('https://github.com/gkhanh/PoseDetection-AndroidApp.git', '_blank', 'noopener,noreferrer')}
                        >
                            Github
                        </button>
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => window.location.href = 'https://github.com/'}
                        >
                            ReadMe
                        </button>
                    </div>
                </div>
                <div className="project-details-container color-container">
                    <div className="img-container">
                        <img
                            src={project3Image}
                            alt="Project 3"
                            className="project-img"
                        />
                    </div>
                    <h2 className="skill-sub-title project-title">Simple Weather App</h2>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => window.open('https://github.com/gkhanh/WeatherAppMAUI', '_blank', 'noopener,noreferrer')}
                        >
                            Github
                        </button>
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => window.location.href = 'https://drive.google.com/file/d/1bzo8sXv5T3yM4eOEq5y6BG-aOf-B7yLL/view?usp=sharing'}
                        >
                            App Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <img
            src={arrowIcon}
            alt="Arrow icon"
            className="icon arrow"
            onClick={() => window.location.href = '#contact'}
        />
    </section>
);

export default Projects;

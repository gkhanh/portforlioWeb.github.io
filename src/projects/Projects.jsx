import React from 'react';
import arrowIcon from '../assets/down-arrow.png';
import project1Image from '../assets/project-1.png';
import project2Image from '../assets/project-2.png';
import project3Image from '../assets/project-3.png';

import './Projects.css'

const Projects = () => (
    <section id="projects">
        <p className="section__text__p1">Browse My</p>
        <h1 className="title">Projects</h1>
        <div className="skill-details-container">
            <div className="about-containers">
                <div className="details-container color-container">
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
                            onClick={() => window.location.href = 'https://github.com/'}
                        >
                            Live Demo
                        </button>
                    </div>
                </div>
                <div className="details-container color-container">
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
                <div className="details-container color-container">
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
                            onClick={() => window.open('https://github.com/gkhanh/WeatherAppXamarin.git', '_blank', 'noopener,noreferrer')}
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

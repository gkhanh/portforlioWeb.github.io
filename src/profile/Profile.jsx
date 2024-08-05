import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import instagramIcon from '../assets/instagram.png';
import pdfFile from '../assets/Khanh_Le_-_CV.pdf';
import './Profile.css'

const Profile = () => (
    <section id="profile">
        <div className="section__pic-container">
            <div className="frame">
                <img src={profilePic} alt="Khanh Le profile picture" className="profile-pic"/>
            </div>
        </div>
        <div className="section__text">
            <p className="section__text__p1">Welcome to my Portfolio website</p>
            <h1 className="title">Gia Khanh Le Van</h1>
            <p className="section__text__p2">Computer Science Student</p>
            <div className="btn-container">
                <button className="btn btn-color-2" onClick={() => window.open(pdfFile)}>
                    Download CV
                </button>
                <button className="btn btn-color-1" onClick={() => window.location.href = '#contact'}>
                    Contact Info
                </button>
            </div>
            <div id="socials-container">
                <img
                    src={linkedinIcon}
                    alt="My LinkedIn profile"
                    className="icon"
                    onClick={() => window.open('https://www.linkedin.com/in/gkhanhle/', '_blank', 'noopener,noreferrer')}
                />
                <img
                    src={githubIcon}
                    alt="My Github profile"
                    className="icon"
                    onClick={() => window.open('https://github.com/gkhanh', '_blank', 'noopener,noreferrer')}
                />
                <img
                    src={instagramIcon}
                    alt="My Instagram profile"
                    className="icon"
                    onClick={() => window.open('https://www.instagram.com/gkhanh02/', '_blank', 'noopener,noreferrer')}
                />
            </div>
        </div>
    </section>
);

export default Profile;

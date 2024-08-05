import React from 'react';
import nodeJsIcon from '../assets/developer.png';
import bootstrapIcon from '../assets/bootstrap.png';
import reactIcon from '../assets/atom.png';
import githubIcon from '../assets/github.png';
import arrowIcon from '../assets/down-arrow.png';
import cplusplusIcon from '../assets/c-logo.png';
import csharpIcon from '../assets/csharp-logo.png';
import javaIcon from '../assets/java.png';
import pythonIcon from '../assets/python.png';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css-3.png';
import javascriptIcon from '../assets/java-script.png';
import './Skills.css'

const Skills = () => (
    <section id="skill">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Technical Skills</h1>
        <div className="skill-details-container">
            <div className="about-containers">
                <div className="details-container">
                    <h2 className="skill-sub-title">Programming Languages</h2>
                    <div className="article-container">
                        <article>
                            <img src={cplusplusIcon} alt="Cplusplus icon" className="icon"/>
                            <div>
                                <h3>C++</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>
                        <article>
                            <img src={csharpIcon} alt="CSharp icon" className="icon"/>
                            <div>
                                <h3>C#</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>
                        <article>
                            <img src={javaIcon} alt="Java icon" className="icon"/>
                            <div>
                                <h3>Java(Kotlin)</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>
                        <article>
                            <img src={pythonIcon} alt="Python icon" className="icon"/>
                            <div>
                                <h3>Python</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>
                        <article>
                            <img src={htmlIcon} alt="HTML icon" className="icon"/>
                            <div>
                                <h3>HTML</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>
                        <article>
                            <img src={cssIcon} alt="CSS icon" className="icon"/>
                            <div>
                                <h3>CSS</h3>
                                <p>Basic</p>
                            </div>
                        </article>
                        <article>
                            <img src={javascriptIcon} alt="JavaScript icon" className="icon"/>
                            <div>
                                <h3>JavaScript</h3>
                                <p>Basic</p>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="details-container">
                    <h2 className="skill-sub-title">Tools and Frameworks</h2>
                    <div className="article-container">
                        <article>
                            <img src={reactIcon} alt="React icon" className="icon"/>
                            <div>
                                <h3>React JS</h3>
                                <p>Basic</p>
                            </div>
                        </article>
                        <article>
                            <img src={nodeJsIcon} alt="NodeJS icon" className="icon"/>
                            <div>
                                <h3>Node JS</h3>
                                <p>Basic</p>
                            </div>
                        </article>
                        <article>
                            <img src={bootstrapIcon} alt="Bootstrap icon" className="icon"/>
                            <div>
                                <h3>Bootstrap</h3>
                                <p>Basic</p>
                            </div>
                        </article>
                        <article>
                            <img src={githubIcon} alt="Github icon" className="icon"/>
                            <div>
                                <h3>Git</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
        <img
            src={arrowIcon}
            alt="Arrow icon"
            className="icon arrow"
            onClick={() => window.location.href = '#projects'}
        />
    </section>
);

export default Skills;

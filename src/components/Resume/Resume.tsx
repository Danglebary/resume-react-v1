import React from 'react';
import './Resume.css';
import Header from '../Header/Header';
import SkillsList from '../SkillsList/SkillsList';
import TableOfContents from '../TableOfContents/TableOfContents';

const Resume = () => {
    return (
        <div className="resume-master-container">
            <TableOfContents />
            <Header />
            <section className="about-me-container">
                <div className="about-me-content-container">
                    <h2 id="aboutMe" className="about-me-title">
                        About me
                    </h2>
                    <div className="about-me-item-container">
                        <p className="about-me-content">
                            I am a self-taught{' '}
                            <span className="colorful-text-primary">
                                full stack developer
                            </span>
                            . I have worked on various projects ranging from web
                            design and server management, to data science and
                            web automation.
                            <br /> As a developer, I have learned that one of
                            the most vital skills to have is the ability to
                            swiftly acquire knowledge and information you don’t
                            currently possess.
                            <br /> Outside of programming and development, I
                            have enjoyed producing and engineering music.
                            Through running a small record label, managing
                            multiple artist careers and projects, scheduling
                            releases, and facilitating events, I have learned
                            organization and management skills that have helped
                            me become a better developer.
                        </p>
                    </div>
                </div>
            </section>
            <section className="Skills">
                <SkillsList id="skills" title="Skills" />
            </section>
        </div>
    );
};

export default Resume;

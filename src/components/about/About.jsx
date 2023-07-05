import React from 'react';
import "./about.css";
import Image from '../../assets/avatar-2.svg'
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            I am a recent computer science graduate from California State University, Long Beach with a passion for using data to solve problems. I have experience as a Software Engineer Intern and IT Project Manager Intern, and I am seeking entry-level roles in data analysis, software engineering, or product management.
            </p>
            <a href="https://drive.google.com/file/d/17SQ3m9x7hV26dm1q_WhsFp4hkecvuzAf/view?usp=sharing" className="btn">Download Resume</a>
          </div>

          <div className="about__coursework grid">
            <div className="coursework__data">
              <div className="coursework__titles">
                <h2 className='coursework__titles'>Coursework:</h2>
                <h4 className="coursework_name">• Data Structures & Algorithms</h4>
                <h4 className="coursework_name">• Database Fundamentals</h4>
                <h4 className="coursework_name">• Machine Learning</h4>
                <h4 className="coursework_name">• Artificial Intelligence</h4>
                <h4 className="coursework_name">• Mobile Application Development</h4>
                <h4 className="coursework_name">• UI/UX Design</h4>
                <h4 className="coursework_name">• Operating Systems</h4>
              </div>
            </div>

          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About
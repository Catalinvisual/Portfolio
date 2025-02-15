import React from 'react'
import "./About.css"
import { profile2 } from "../../images"
const About = () => {
  return (
    <section id='about'>
        <div className="section__wrapper about__container">
          <div className="me__container blur__effect">
            <div className="photo__container">
              <img src={profile2} alt="My photo" />
            </div>
          </div>
          <div className="section__header">
            <h2 className='primary__title'>About Me</h2>
            <h1 className="title">I am <span className="color__primary">Catalin</span></h1>
           <p className="text__muted description">
           Full Stack Developer with a passion for creating dynamic, intuitive, and responsive applications . Proficient in multiple programming languages ​​and frameworks, with problem-solving skills and a track record of delivering high-quality code on time and within budget .
           </p>
          </div>
        </div>
    </section>
  )
}

export default About
import React from 'react'
import "./Services.css"
import { BsCodeSquare } from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
        <div className="section__wrapper services__wrapper">
          <div className="section__header center">
            <h2 className="primary__title">Services</h2>
            <p className="text__muted description">
            I transform your ideas, and consequently your desires, into a 
            distinctive web project that both inspires you and captivates your customers.
            </p>
          </div>
          <div className="services__group">
            <article className='service' style={{"--color-primary":"var(--color-success"}}>
              <div className="service__top">
                <div className="icon__container">
                <BsCodeSquare className='icon'/>
                </div>
                <h3 className="title">Web Development</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                Web development is the art and science of building interactive, user-friendly, and efficient digital experiences. It combines front-end design, back-end logic, and database management to create websites and applications that engage users and solve real-world problems. With evolving technologies like JavaScript frameworks, cloud computing, and AI-driven solutions, web development continues to shape the way we interact with the digital world.
                </p>
              </div>
              <div className="service__bottom">
                <a href="https://www.geeksforgeeks.org/web-development/">  
                <button className='btn btn__primary'>Read more</button>
                </a>
                
              </div>
            </article>
          </div>
        </div>
    </section>
  )
}

export default Services
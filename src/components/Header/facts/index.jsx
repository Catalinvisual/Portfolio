import React, { useState, useEffect } from "react";
import "./Facts.css";
import Odometer from "react-odometerjs";

const Facts = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setExperience(1);
      setProjects(7);
      setClients(7);
    }, 3000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  return (
    <div className="fact__container">
      <div className="fact__item">
        <div className="count__container">
          <Odometer value={experience} />
          <span className="indicator">+</span>
        </div>
        <p className="name">Years of Experience</p>
      </div>
      <div className="fact__item">
        <div className="count__container">
          <Odometer value={projects} />
          <span className="indicator">+</span>
        </div>
        <p className="name">Completed Projects</p>
      </div>
      <div className="fact__item">
        <div className="count__container">
          <Odometer value={clients} />
          <span className="indicator">+</span>
        </div>
        <p className="name">Satisfied Clients</p>
      </div>
    </div>
  );
};

export default Facts;

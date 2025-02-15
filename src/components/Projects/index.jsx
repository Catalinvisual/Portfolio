import React, {useState,useEffect, useRef} from 'react'
import "./Projects.css"
import { sumArray } from '../../helper'
import {projects} from '../../data'
import Card from './Card'
const tabs = [
  {name:"All"},
  {name:"Cosmetics Page"},
  {name:"Fake Store"},
  {name:"News Page"},
  {name:"Travel Page"},
  {name:"Discover new Home"},
  {name:"Food Page"}
]

const Projects = () => {
  const[displayableProjects,setDisplayableProjects] = useState(projects)
  const [activeIndex,setActiveIndex] = useState(0);
  const[offset,setOffset] = useState(0);
  const[indicatorWidth,setIndicatorWidth] = useState(0); 
  const itemsEls = useRef(new Array())
  
  useEffect(() => {
    if (itemsEls.current[activeIndex]) {
      const element = itemsEls.current[activeIndex];
      const parent = element.parentElement; // `nav` container-ul
  
      setOffset(element.getBoundingClientRect().left - parent.getBoundingClientRect().left);
      setIndicatorWidth(element.offsetWidth);
    }
  }, [activeIndex]);

  const setProjects = (category) => {
    if(category === "All"){
      return setDisplayableProjects(projects)
    }
    const pro = projects.filter((item)=>item.category.toLocaleLowerCase() === category.toLocaleLowerCase())
    setDisplayableProjects(pro)
  }

  return (
    <section id='projects'>
     <div className="section__wrapper projects__container">
      <div className="section__header center">
        <h2 className="primary__title">Projects</h2>
      </div>
      <nav>
        {
          tabs.map((tab,index) => (
            <button 
            ref={el =>itemsEls.current[index] = el}
            onClick={()=>{
              setActiveIndex(index)
              setProjects(tab.name)
            }}
            key={index}
            >
             {tab.name}
            </button>
          ))
          }
          <span className="active__indicator"
          style={{
            left:`${offset}px`,
            width:`${indicatorWidth}px`
          }}
          ></span>
      </nav>
      <div className="card__container">
        {
          displayableProjects.map((projects,index) =>(
            <Card
            title={projects.title}
            image={projects.image}
            data={projects.data}
            stack={projects.stack}
            key={index}
            />
          ))
        }
      </div>
     </div>
    </section>
    
  )
}

export default Projects
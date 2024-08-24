import React from 'react'
import './Experience.css'
import { themeContext } from "../../Context";
import { useContext } from 'react';


function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience">
        <div className="achivement">
            <div className="circle">1+</div>
            <span  style={{color: darkMode?'white':''}}>Years</span>
            <span>Experience</span>
        </div>
        <div className="achivement">
            <div className="circle">8+</div>
            <span  style={{color: darkMode?'white':''}}>Completed</span>
            <span>Projects</span>
        </div>
        <div className="achivement">
            <div className="circle">3+</div>
            <span style={{color: darkMode?'white':''}}>OpenSource</span>
            <span>Contribution</span>
        </div>
    </div>
  )
}

export default Experience
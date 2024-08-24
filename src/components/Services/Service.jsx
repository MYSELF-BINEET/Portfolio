import React from 'react'
import './Servics.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from  "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import { themeContext } from "../../Context";
import { useContext } from 'react';
import { motion } from "framer-motion";


function Service() {
  const transition = {
    duration: 1,
    type: "spring",
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='services'>
        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
            <span>Services</span>
            <span>Learning. Growing. Blooming✨ | Passionate developer with a love for  <br /> problem-solving , efficient and creative thinking 🔥💫</span>
            <a href="" download><button className="button s-button">Download CV</button></a>
            <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
            <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
        </div>
        <div className="cards">
            <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
             style={{left:'14rem',padding:'10px'}}>
                <Card 
                emoji={HeartEmoji}
                heading={"Developer"}
                detail={"MERN Developer Next.js TypeScript JavaScript"}
                />
            </motion.div>
            <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
         
            style={{top:"12rem", left:"-4rem"}}>
              <Card
              emoji={Glasses}
              heading={"Backend"}
              detail={"Java Web MicroServices  Spring   Hibernate  Spring Boot"}
              />
            </motion.div>
            <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition} 
            style={{top:'19rem' , left:'12rem'}}>
              <Card
              emoji={Humble}
              heading={"DevOps"}
              detail={"AWS Services Jenkins  Docker Kubernetes Terraform"}
              />
            </motion.div>
            <div className="blur s-blur2" style={{background:'var(--purple'}}></div>
        </div>
    </div>
  )
}

export default Service
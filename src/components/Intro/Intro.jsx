import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkdin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/dot.png'
import thumup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from "../../Context";
import { useContext } from 'react';
import {motion} from 'framer-motion';

// import FloatingDiv from '../FloatingDiv/Floating'

function Intro() {
  const transition ={duration:2 ,type :'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am </span>
                <span>Bineet Pradhan</span>
                <span>Full Stack Developer with high level of expreience in web designing and development, producting the Quality work</span>
            </div>
            {/* <button className="button i-button">Hire Me</button> */}
            <div className="i-icons">
             <a href="https://github.com/MYSELF-BINEET" target='_blanck' > <img src={Github} alt="GitHub" /></a>
             <a href='https://www.linkedin.com/in/bineet-pradhan-2382aa258/' target='_black'> <img src={Linkdin} alt="LinkedIn"/></a>
              <a href='https://www.instagram.com/myself_bineet/' target='_black'><img src={Instagram} alt="" /></a>
            </div>
        </div>
        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt="" />
          <motion.img 
           initial={{left:'-36%'}}
           whileInView={{left:'-24%'}}
           transition={{transition}}
          src={glassesimoji} alt="" />
          <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{top:'-4%' , left:'70%'}}>
            <FloatingDiv  image={Crown} txt1="Web" txt2="Developer"/>
          </motion.div>
          <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{top:'18rem' , left:'-2rem'}}>
            <FloatingDiv image={thumup} txt1="Best Design" txt2="Award"/>
          </motion.div>
          <div className="blur" style={{backgroundColor:"rgb(238 210 255"}}></div>
          <div className="blur" style={{background:'#C1F5FF', top:'17rem', width:'21rem',height:"11rem",
        left:'-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro
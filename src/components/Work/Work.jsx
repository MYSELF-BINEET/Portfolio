import React from 'react'
import './Work.css'
import Node from '../../img/node.png'
import Kubernetes from '../../img/kubernetes.png'
import Reactjs from '../../img/react.png'
import SpringBoot from '../../img/springboot.png'
import Docker from '../../img/docker.png'
import { themeContext } from "../../Context";
import { useContext } from 'react';
import { motion } from "framer-motion";



function Work() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="works" id='works'>
         <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>Work With This </span>
            <span>SKills and Tools</span>
            <span>We are developers  .We can create ✨ | As well as destroy   <br /> It does not mean that you are Mahakal 🔥<br />Ctrl + Code + Create.</span>
            <a href="" download><button className="button s-button">Hire Me</button></a>
            <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
            <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
        </div>
        <div className="w-right">
            <motion.div
          initial={{ rotate: 75 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={SpringBoot} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Docker} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Node} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Kubernetes} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Reactjs} alt="" />
                </div>
            </motion.div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Work
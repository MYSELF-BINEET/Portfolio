import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro.jsx';
import Service from './components/Services/Service.jsx';
import Experience from './components/Experience/Experience.jsx';
import Work from './components/Work/Work.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Testimonial from './components/Testimonials/Testimonials.jsx';
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx';
import { themeContext } from './Context.jsx';
// import { Context,useContext } from 'react';
// import {useContext} from "react";
// import { createContext } from 'react';
function App() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background:darkMode?'black':' ',
      color:darkMode?'white':' ',
    }}
    >
      <Navbar/>
      <Intro/>
      <Service/>
      <Experience/>
      <Work/>
      <Portfolio/>
      {/* <Testimonial/> */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

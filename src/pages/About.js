import './about.css';

import About1 from '../components/about/index';
import Footer from '../components/footer/footer';
import Navbar from '../components/nav/Navbar';
import React from 'react';
import Sidebar from '../components/nav/Sidebar';
import blogo from '../images/img.jpeg';

const About = () => {
   return( <>
    <Navbar/>
    <Sidebar/>
    <div className="banner">
    <img className="blogo" src={blogo} alt="NKD"/>
    </div>
    <About1/>
  
   
    <Footer/>
    </>
 )  
};

export default About;
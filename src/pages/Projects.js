import './project.css'

import Footer from '../components/footer/footer';
import Gallery1 from '../components/gallery/index';
import Navbar from '../components/nav/Navbar';
import React from 'react';
import Sidebar from '../components/nav/Sidebar';
import blogo from '../images/img.jpeg';

const Projects1 = () => {
    return(
        <>
        <Navbar/>
        <Sidebar/>
        <div className="bannerpro">
          <img className="blogo" src={blogo} alt="NKD"/>
           </div>
      <div className="pro">
      <Gallery1/>
      </div>
      <Footer/>
        </>
    )
}

export default Projects1;
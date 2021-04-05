import './services.css';

import About1 from '../components/about1/about1';
import Footer from '../components/footer/footer';
import Navbar from '../components/nav/Navbar';
import React from 'react';
import Sidebar from '../components/nav/Sidebar';
import blogo from '../images/img.jpeg';

const Services = () => {
    return (
        <>
        <Navbar/>
        <Sidebar/>
         <div className="bannerser">   <img className="blogo" src={blogo} alt="NKD"/></div>
        <About1/>
        <Footer/>
        </>
    )
}

export default Services;
import './contact.css'

import ContactUs from '../components/contact/index';
import Navbar from '../components/nav/Navbar'
import React from 'react';
import Sidebar from '../components/nav/Sidebar';
import blogo from '../images/img.jpeg';

const Contact = () => {
  
  
    return (
    <>
    <Navbar/>
    <Sidebar/>
    <div className="bannerimage">  
    <img className="blogo" src={blogo} alt="NKD"/>
   </div>
   <ContactUs/>
    </>
      
     
    );
  };
  
  export default Contact;
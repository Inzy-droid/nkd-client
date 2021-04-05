import '../styles.css';

import Footer from '../components/footer/footer';
import Project from '../components/projects/projects';
import React from "react";
import Service from '../components/services/index';
import Slider from '../components/Slider';
import Testimonials from '../components/testimonials/index';

const Home = () => {

  return (
    <>
    <div className="home__container">
   <div className='header'><Slider/>  </div>
   
   </div>
    
      <Service/>
  
    <div className="projects">
    <Project/>
   </div>
  <div>
    <Testimonials/>
  </div>
 <div> <Footer/>
 </div>
    
    

   
    </>
  );
}


export default Home;

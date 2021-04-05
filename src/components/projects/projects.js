import './projects.css';

import React, { Component } from "react";

import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import img1 from '../../images/p1.jfif';
import img10 from '../../images/p10.jfif';
import img2 from '../../images/p2.jfif';
import img3 from '../../images/p3.jfif';
import img4 from '../../images/brett-jordan-PFr50OBMowU-unsplash.jpg';
import img5 from '../../images/p5.jfif';
import img6 from '../../images/daniela-gisin-krumsick--oBPH6PsX8A-unsplash.jpg';
import img7 from '../../images/daniela-gisin-krumsick-VtO6A-I3piU-unsplash.jpg';
import img8 from '../../images/p8.jfif';
import img9 from '../../images/p9.jfif';
import { v4 as uuidv4 } from 'uuid';

export default class Project extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
    autoplay: true
  };

  slides = [
    {
      key: uuidv4(),
      content: <img className="img" src={img1} alt="1" />
    },
    {
      key: uuidv4(),
      content: <img className="img" src={img2} alt="2" />
    },
    {
      key: uuidv4(),
      content: <img className="img"  src={img3} alt="3" />
    },
    {
      key: uuidv4(),
      content: <img className="img" src={img4} alt="4"/>
    },
    {
      key: uuidv4(),
      content: <img className="img"  src={img5} alt="5" />
    },
    {
      key: uuidv4(),
      content: <img className="img" src={img6} alt="6" />
    },
    {
      key: uuidv4(),
      content: <img className="img" src={img7} alt="7" />
    },
    {
      key: uuidv4(),
      content: <img className="img" src={img8} alt="8" />
    },
    {
      key: uuidv4(),
      content: <img className="img" src={img9} alt="9" />
    },
    {
      key: uuidv4(),
      content: <img className="img" src={img10} alt="10" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
    <section className="work" id="work">
        <div className="heading">
          <h2>Some of our Projects</h2>
            
         </div>
    
      <div classname="carousel" style={{ width: "80%", height: "500px", margin: "0 auto"}}>
     
     
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      
         </div>
       
         <div className="heading">
            <a href="/projects" target="_blank"className="btn" >See more</a>
        </div>
         </section>
      
    );
  }
}

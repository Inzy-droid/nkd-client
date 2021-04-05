import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './gallery.css';

import React, { useEffect, useState }  from 'react';

import Slider from "react-slick";

const Gallery1 = () => {
   
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
  
    useEffect(() => {
  
      setNav1(slider1);
      setNav2(slider2);
  
    });
  
  
    const settingsMain = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',
      autoplay: true,
      
    };
  
    const settingsThumbs = {
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      swipeToSlide: true,
      focusOnSelect: true,
      centerPadding: '10px'
    };
  
    const slidesData = [
      {
        id: 1,
        title: 'repellendus id ullam',
        label: 'Dolorem officiis temporibus.',
        imageUrl:'https://i.postimg.cc/HjtFq0Gw/Whats-App-Image-2021-03-21-at-21-47-30.jpg'
      }, {
        id: 2,
        title: 'excepturi consequatur est',
        label: 'Officia non provident dolor esse et neque.',
        imageUrl:'https://i.postimg.cc/Q9Qvx1Fr/Whats-App-Image-2021-03-21-at-21-47-30-3.jpg'
      }, {
        id: 3,
        title: 'eius doloribus blanditiis',
        label: 'Ut recusandae vel vitae molestiae id soluta.',
        imageUrl:'https://i.postimg.cc/6TKDbjP6/Whats-App-Image-2021-03-21-at-21-47-30-1.jpg'
      }, {
        id: 4,
        title: 'nihil voluptates delectus',
        label: 'Qui vel consequatur recusandae illo repellendus.',
        imageUrl:'https://i.postimg.cc/H8TRJnM8/Whats-App-Image-2021-03-21-at-21-47-30-2.jpg'
      }, {
       
        id: 5,
        title: 'dolorem quibusdam quasi',
        label: 'Adipisci officiis repudiandae.',
        imageUrl:'https://i.postimg.cc/hzWHBpPr/Whats-App-Image-2021-03-21-at-21-47-29.jpg'
      }, {
        id: 6,
        title: 'repellendus id ullam',
        label: 'Dolorem officiis temporibus.',
        imageUrl:'https://i.postimg.cc/jWXjzcCs/Whats-App-Image-2021-03-21-at-21-45-40.jpg'
      }, {
        id: 7,
        title: 'excepturi consequatur est',
        label: 'Officia non provident dolor esse et neque.',
        imageUrl:'https://i.postimg.cc/R6ZZGtnw/Whats-App-Image-2021-03-21-at-21-45-40-1.jpg'
      }, {
        id: 8,
        title: 'eius doloribus blanditiis',
        label: 'Ut recusandae vel vitae molestiae id soluta.',
        imageUrl:'https://i.postimg.cc/75ShLwkJ/Whats-App-Image-2021-03-21-at-21-45-40-2.jpg'
      }, {
        id: 9,
        title: 'nihil voluptates delectus',
        label: 'Qui vel consequatur recusandae illo repellendus.',
        imageUrl:'https://i.postimg.cc/t1yTZwqS/Whats-App-Image-2021-03-21-at-21-45-41.jpg'
      }, {
        id: 10,
        title: 'dolorem quibusdam quasi',
        label: 'Adipisci officiis repudiandae.',
        imageUrl:'https://i.postimg.cc/9r6zVzvj/Whats-App-Image-2021-03-21-at-21-45-41-1.jpg'
      },  {
        id: 11,
        title: 'repellendus id ullam',
        label: 'Dolorem officiis temporibus.',
        imageUrl:'https://i.postimg.cc/dD7yYMLr/Whats-App-Image-2021-03-21-at-21-39-52.jpg'
      }, {
        id: 12,
        title: 'excepturi consequatur est',
        label: 'Officia non provident dolor esse et neque.',
        imageUrl:'https://i.postimg.cc/vDp68PVj/Whats-App-Image-2021-03-21-at-21-39-53.jpg'
      }, {
        id: 13,
        title: 'eius doloribus blanditiis',
        label: 'Ut recusandae vel vitae molestiae id soluta.',
        imageUrl:'https://i.postimg.cc/CR0BkzJs/Whats-App-Image-2021-03-21-at-21-39-53-1.jpg'
      }, {
        id: 14,
        title: 'nihil voluptates delectus',
        label: 'Qui vel consequatur recusandae illo repellendus.',
        imageUrl:'https://i.postimg.cc/dLrZh8R0/Whats-App-Image-2021-03-21-at-21-39-53-2.jpg'
      }, {
       
        id: 15,
        title: 'dolorem quibusdam quasi',
        label: 'Adipisci officiis repudiandae.',
        imageUrl:'https://i.postimg.cc/8Ft61NRB/Whats-App-Image-2021-03-21-at-21-39-53-4.jpg'
      },
      {
        id: 16,
        title: 'dolorem quibusdam quasi',
        label: 'Adipisci officiis repudiandae.',
        imageUrl:'https://i.postimg.cc/34q0v1bk/Whats-App-Image-2021-03-21-at-21-39-54-1.jpg'
      },
    ];
  
    return (
    
        <div className="App">
          <h2 className="proj">Projects</h2>
          <h3 className="slick-slide-title">Take a look at some of our recent projects</h3>
        <div className="slider-wrapper">
  
          <Slider
            {...settingsMain}
            asNavFor={nav2}
            ref={slider => (setSlider1(slider))}
          >
  
            {slidesData.map((slide) =>
  
              <div className="slick-slide" key={slide.id}>
            
                <img className="slick-slide-image" src={slide.imageUrl} alt="NKD Slide"/>
               
              </div>
  
            )}
  
          </Slider>
          <div className="thumbnail-slider-wrap">
            <Slider
               {...settingsThumbs}
               asNavFor={nav1}
               ref={slider => (setSlider2(slider))}>
   
               {slidesData.map((slide) =>
   
                 <div className="slick-slide" key={slide.id}>
                   <img className="slick-thumbslide-image" src={slide.imageUrl} alt="NKD Slide" />
                 </div>
   
               )}
   
             </Slider>
           </div>
         </div>
   
       </div>
     );
    }
    
    export default Gallery1;

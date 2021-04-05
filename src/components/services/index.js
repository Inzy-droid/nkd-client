import './services.css';

import React from 'react'
import img1 from '../../images/d-b.jpg';
import img2 from '../../images/g-w.jpg';
import img3 from '../../images/remodel.jpg';
import img4 from '../../images/extensions.jpg';
import img5 from '../../images/loft.jpg';
import img6 from '../../images/basement.jpg';

const Service = () => {
    return(        
       
        <section className="services" id="services">
       <div className="heading white">
        <h2 className="h2">Our services</h2>
        <p>Services offered to clients</p>
    </div>
    <div className="content">
        <div className="servicesBx">
          <img className="serviceImg"src={img1} alt=""/>
            <h3>Bespoke Building & Design</h3>
            <p>From the initial design stage, helping you to make the most of your available space with clever design hacks, to the final finish, with all electrical, plastering, flooring and other remedial work in between. </p>
        </div>
        <div className="servicesBx">
        <img className="serviceImg" src={img2} alt=""/>
           <h3>Groundworks</h3>
           <p> All NKD Contractors projects are delivered by highly skilled and trained operatives in all areas of essential groundwork infrastructure. Our groundwork plays a vital part in making our clients' homes safe, structurally sound, and comfortable to live in.</p>
       </div>
       <div className="servicesBx">
       <img className="serviceImg" src={img3} alt=""/>
           <h3>Renovations</h3>
           <p>Our professional team work quickly, closely with you bringing the best minds in the home renovations service, to give you the new modern living experience you deserve. No project is too small let NKD Contractors take care of you! </p>
       </div>
       <div className="servicesBx">
       <img className="serviceImg" src={img4} alt=""/>
           <h3>Extensions</h3>
           <p>Whether you are at the beginning of your extension journey, or have your initial plans in place, let Nkd Contractors help you create your dream space. </p>
       </div>
       <div className="servicesBx">
       <img className="serviceImg" src={img5} alt=""/>
           <h3>Loft Conversions</h3>
           <p>Release the potential in your home by optimizing your surplus living space and creating that extra room you have always desired.</p>
       </div>
       <div className="servicesBx">
       <img className="serviceImg" src={img6} alt=""/>
           <h3>Basements</h3>
           <p> Nkd Contractors can convert your damp and dark cellar or basement into a new usable living space to suit your needs.</p>
       </div>
      
    </div>
    </section>
    )
}

export default Service;

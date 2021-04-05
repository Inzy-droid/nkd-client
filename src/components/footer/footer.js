import './footer.css';

import { faEnvelopeOpen, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import img1 from '../../images/img.jpeg';

const Footer = () => {
   return (
<section className="footer">
   <div className="footer-top"></div>
<footer className="footer-main">
         <div className="f-i-left">
          <img className="footer-logo" src={img1} alt="footer-logo"/>
          <h6>Construction Company</h6>
          <p>Company No:10474543 </p>
          <p>VAT No:58296855555555</p>
         </div>
         <div className="f-i-middle">
          <h6>Terms and Conditions</h6>
          <h6>Privacy Policy </h6>
          <h6>Sitemap</h6>
          <h6>FAQs</h6>
          <br/>
          <h3>Connect with us</h3>
                    <div className="boxSocial">
                     
                            <FontAwesomeIcon className="fa" icon={faFacebookF} />
                            <FontAwesomeIcon className="fa" icon={faTwitterSquare}/>
                            <FontAwesomeIcon className="fa" icon={faLinkedin} />
                            <FontAwesomeIcon className="fa" icon={faInstagramSquare} />
                    </div>
         </div>
          <div className="f-i-right">
          <h5>Contact info</h5>
         
                 <div className="box">
                        <FontAwesomeIcon className="icon" icon={faMapMarker} size="2x"/>
                        <div className="text">
                           <h6>Address</h6>
                           <address>65 Dartmouth Road, <br/>London,<br/>SE23 3HT</address>
                        </div>
                  </div>
                    
                  <div className="box">
                     <FontAwesomeIcon className="icon" icon={faPhone} size="2x" />
                        <div className="text">
                          <h6>Contact Number:</h6>  
                          <p>02083556068</p>
                        </div>
                  </div>
                   
                  <div className="box">
                     <FontAwesomeIcon className="icon" icon={faEnvelopeOpen} size="2x" />
                        <div className="text">
                          <h6>Email address:</h6>  
                          <p>nkd-derza@hotmail.com</p>
                        </div>
                  </div>
                  </div>
        
         </footer>  
         <div className="copy">
         <p>&copy; 2021, NKD Contractors, All rights reserved</p>
         </div>
         </section> 
   );
 };
 
 export default Footer;
 
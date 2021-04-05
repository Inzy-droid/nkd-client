import './about.css';

import Pro from '../../images/img.jpeg';
import React from 'react'

const About1 = () => {
    return(        
       
        <section className="about" id="about">
        <div className="heading">
           
            <h2>About us</h2>
        </div>
        <div className="content">
            <div className="w50">
                <img src={Pro} alt="" className="proPic"/>
            </div>
            <div className="contentBx w50">
                <h3>Who we are</h3>
                <h2>London's Leading Design and Build Contractors</h2>
                <p>NKD Contractors is a family run business that was established in 2017. Known for their attention to detail and great customer experience and service NKD has grown to be a trusted provider of great projects in East London. We have successfully completed projects of all sizes from home extensions to full refurbishments and new builds. </p>
                <br/>
                <p>We are fully insured for all liabilities and professional indemnities to the value of £1,000,000.00. Copies of our certificates are available for viewing upon request. It is essential that anyone providing design services for your home is fully insured for professional indemnity.</p>
                <br/>
                <h2>Services Provided</h2>
                <p> Accessible Design, Arbour Design and Construction, Balcony Design & Construction, Balcony Repair, Basement Conversion, Basement Waterproofing, Bath Installation, Bath Repair, Bathroom Installation, Bathroom Vanity Unit Installation, Bespoke Cabinets, Bespoke Home Bars, Bespoke Saunas, Bifold Door Installation, Bifold Window Installation, Brick Cladding, Brick Repair, Brick Supplies, Brickwork, Building Conservation, Cabinet Installation, Cedar Cladding, Chimney Construction, Complete Bathroom Renovation, Complete Kitchen Renovation, Concrete Construction, Concrete Flooring, Conservatory Design & Installation, Cooker Hood Installation, Custom Build Home, Damp Proofing, Damp Removal, Decking Installation, Demolition, Double Glazing, Drafting, Eco Homes, Entrance Design, Equipment Rental, Excavation, Exterior Wall Repair, Fibre Cement Cladding, Fireproofing, Floor Plans, Floor Polishing, Foundations Construction, Foundations Repair, Garage Building, Greenhouse Design & Installation, Hardwood Flooring Installation </p>
            </div>
        </div>
    </section>
    )
}

export default About1;

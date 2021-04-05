import House from '../../images/house.png';
import React from 'react';

const About1 = () => {
  return(
    <section className="about-us">
    <div className="section-header">
        <h3 className="section-heading">
            What we do
        </h3>
    </div>
    <div className="abservices">
        <div className="abserv">
            <div className="abserv-header">
                <i className="fas fa-users"></i>
                <h3>Consultation</h3>
            </div>
            <p className="abserv-text">Honest, reliable and trustworthy, Throughout the years NKD Contractors Ltd has been known by these attributes and for our impeccable attention to detail. This has connected us with a multitude clients allowing us to aid them make their visions become reality.  </p>
        </div>
        <div className="abserv">
            <div className="abserv-header">
                <i className="fas fa-drafting-compass"></i>
                <h3>Planning</h3>
            </div>
            <p className="abserv-text">NKD Contractors LTD's team of construction professionals has vast knowledge of the building industry and its standards along with working methods. We can guide you through the complicated regulations that Local Authorities require you to comply with.</p>
        </div>
        <div className="abserv">
            <div className="abserv-header">
                <i className="fas fa-pencil-alt"></i>
                <h3>Design</h3>
            </div>
            <p className="abserv-text">Bespoke designs from scratch, We work with you turning your ideas into the very first sketch right through until the final draft combining your objectives and aesthetic with our top of the line expertise, creating the perfect design for your requirements.</p>
        </div>
       
         <div className="abserv">
            <div className="abserv-header">
                <i className="fas fa-hammer"></i>
                <h3>Build</h3>
            </div>
            <p className="abserv-text">NKD's friendly team of hard working builders and regular sub-contractors take the job seriously and handle with care, always listening to our clients needs and communicate with them effectively at every stage to achieve amazing end results.

</p>
        </div>
        <div className="abserv">
            <div className="abserv-header">
                <i className="fas fa-clipboard-list"></i>
                <h3>Project Management</h3>
            </div>
            <p className="abserv-text">Our services covers everything you will need to complete your project, including building regulations and Engineering. We also cover project planning, schedules of work and project management. </p>
        </div>
        <div className="abserv">
            <div className="abserv-header">
                <i className="fas fa-award"></i>
                <h3>Expert Care</h3>
            </div>
            <p className="abserv-text">NKD Contractors Ltd's team of architects, designers, surveyors, technicians and planning officers have seen it all before thus creating London's leading design and build contractor. We have successfully worked with projects of all shapes and sizes, aiding thousands of people complete their dream project throughout the city.</p>
        </div>
        <div className="about-us-img-wrapper">
            <img src={House} alt="house"/>
        </div>
    </div>
</section>
  )  
}

export default About1;
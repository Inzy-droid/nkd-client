import './testimonials.css';

import React from 'react'

const Testimonials = () => {
    return(        
       
        <section className="testimonial" id="testimonial">
        <div className="heading white">
            <h2>Testimonials</h2>
            <p>What our clients say</p>
        </div>
        <div className="content">
            <div className="testimonialBx">
                <p>Nik's team listened to and implemented everything i wanted, they were flexible enough to make design changes and rose to the challenge when we set high standards for quality. I could not be happier with the final result the process was easy, seamless and executed to perfection. I would highly recommend using NKD Contractors for your project.</p>
                <h3>Kaitlin Matthews</h3>
            </div>
            <div className="testimonialBx">
                <p>We partnered with NKD Contractors to design and build our loft conversion . We found them incredibly helpful and patient as we really didn't know what we wanted. Nik met with us on numerous occasions and we found the whole process a great experience. We ended up with a result we loved. We would definitely recommend NKD contractors- you won't be disappointed.</p>
                <h3>Sasha & Andrew Williams</h3>
            </div>
        </div>
        <div className="heading">
            <a href="/testimonials" target="_blank"className="btn" >See more</a>
        </div>
    
    </section>
    )
}

export default Testimonials;
import './contact.css';
import 'react-toastify/dist/ReactToastify.min.css';

import React, { useState } from 'react'
import {ToastContainer, toast} from 'react-toastify';

import Footer from '../footer/footer';
import axios from 'axios';

const ContactUs = () => {
  
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
    buttonText: 'Submit',
    
});

const {name, email, message, buttonText} = values;
const {REACT_APP_API} = process.env
const handleChange= name => event => {
    setValues({...values, [name]:event.target.value});
}

const handleSubmit = (event) => {
   event.preventDefault();
   setValues({...values, buttonText: '...sending'});
   //console.table({name, email, phone, message, uploadedFiles})
   axios({
       method:'POST',
       url: `${REACT_APP_API}/feedback`,
       data: {name, email, message}
   })
   .then(response => {
       //console.log('feedback submit response', response)
       if(response.data.success) toast.success('Successfully submitted');
       setValues({...values, name:'', email:'', message:'', buttonText:'Submitted'});
   })
   .catch(error => {
       //console.log('feedback submit error' , error.response)
       if(error.response.data.error)toast.error('Submission unsuccessful');
   })
};

const feedbackForm= () => (
    
  
<div className="formBx">
<form onSubmit={handleSubmit}>
<div className="heading white">
          
          <h2>Get in touch</h2>
          <p>Feel free to contact us anytime</p>
      </div>
    <p>Fill out our form and an expert will contact you within 24hrs.</p>
    <br/>
    <input type="text" placeholder="Full Name" value={name} onChange={handleChange('name')} required/>
    <input  type="email" placeholder="Email address" value={email} onChange={handleChange('email')} required/>
    <textarea  name="" id="" rows="6" placeholder="Your message" value={message} onChange={handleChange('message')} required></textarea>
    <input className="submit" type="submit" value={buttonText}/>
</form>
</div>


);

    return(        
       <>
        <section className="contact" id="contact">
      
       
        <div className="contactForm">
            
            <ToastContainer/>
           {feedbackForm()} 
           </div>
               
        <br/><br/>
      
    </section>
     <Footer/>
     </>
    )
}

export default ContactUs;

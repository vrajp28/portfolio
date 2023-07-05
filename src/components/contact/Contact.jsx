import React from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const serviceID = "service_elzhixw";
const templateID = "template_7qir92n";
const public_key = "i694hNluA_ljruXhN";

const sendEmail = (e) => {
  e.preventDefault();

  const form = document.querySelector(".contact__form");
  

  emailjs.sendForm(serviceID, templateID, form, public_key);

  form.reset();
};

const Contact = () => {
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email. 👋</p>
        </div>
        <form action="" className="contact__form" onSubmit={sendEmail}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Enter your name' />
            </div>

            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Enter your email' />
            </div>
          </div>

          <div className="contact__form-div">
            <input type="text" className="contact__form-input" placeholder='Enter your subject' />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea 
              name="" 
              id="" 
              cols="30" 
              rows="10" 
              className='contact__form-input' 
              placeholder='Write your message'>
            </textarea>
          </div>

          <button className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
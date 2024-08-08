
import React from 'react';
import './contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImLocation } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa"
export default function Contact() {
  return (
    <>
    <div className='contact-container' data-aos="zoom-in-up" >
    <div className='contact'  id='Contact'>
      <div className='contact-section'>
        <div className="contact-left">
          <span><ImLocation className='con-icons'/>Address:</span>
          <p> 14 LE Goulburn St, Sydney 1198NSA.</p>
          <span><FaPhoneAlt className='con-icons' />Phone Number:</span>
          <p>(+089) 918989</p>
          <span><MdEmail className='con-icons' />Email:</span>
          <p>support@domain.com</p>
          <span><FaFax className='con-icons'/>FAX:</span>
          <p>0123456789</p>
        </div>

        <form className="contact-right">
          <div className='contact-title'>
            <h1>Get in Touch</h1>
          </div>
          <label htmlFor='phone'>Your Phone Number:</label>
          <input type="text" id='phone' placeholder='Enter your phone number' />
          <label htmlFor='email'>Your Email:</label>
          <input type="email" id='email' placeholder='Enter your email' />
          <label htmlFor='message'>Message Here:</label>
          <textarea id='message' name='message' rows='8' placeholder='Enter your message'></textarea>
          <button type='submit' className='contact-submit'>Send Message</button>
        </form>
      </div>
    </div>
    </div>
    </>
  );
}


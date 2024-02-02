import React from 'react'
import './contact.css'
import linkedinImg from '../../images/linkedin.png'
import twitterImg from '../../images/twitter.png'
import githubImg from '../../images/github.png'
import mailImg from '../../images/mail.png'
import leetcodeImg from '../../images/Leetcode Icon.webp'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('tanmay-mail', 'template_zvcg9lg', form.current, '_d98w23NkqYnGxZqO')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent !');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id = 'contactPage'>
      <div className='contact'>
        <h1 className='contactTitle'>Contact Me</h1>
        <div className='contactDescription'> Unlocking opportunities and fostering connections! If you want to <span className='contactcolor'>hire me</span>, <span className='contactcolor'>collaboration proposals</span>, or any other <span className='contactcolor'>queries</span>, Reach out to me by completing the form. I look forward to connecting with you.</div>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type = 'text' className='name2' placeholder='Your Name' name='from_name' required={true}></input>
          <input type='email' className='email' placeholder='Your Email' name='from_email' required={true}></input>
          <textarea className='msg' name='message' rows='5' placeholder='Your Message' required={true}></textarea>
          <button type='submit' value='send' className='submitBtn'>Submit</button>

          <div className='links'>
            <a href='https://www.linkedin.com/in/tanmayarora17/' target='_blank' rel="noreferrer">
            <img src={linkedinImg} alt='LinkedIn' className='link' />
            </a>
            <a href='https://twitter.com/tanmay_0017' target='_blank' rel="noreferrer">
            <img src={twitterImg} alt='Twitter' className='link' />
            </a>
            <a href='https://github.com/tanmay-0017' target='_blank' rel="noreferrer">
            <img src={githubImg} alt='GitHub' className='linkgithub' />
            </a>
            <a href='mailto:tanmay.arora1701@gmail.com' target='_blank' rel="noreferrer">
            <img src={mailImg} alt='Email' className='link' />
            </a>
            <a href='https://leetcode.com/tanmayarora0123/' target='_blank' rel="noreferrer">
            <img src={leetcodeImg} alt='Leetcode' className='link' />
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact

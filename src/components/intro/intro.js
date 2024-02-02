import React from 'react'
import './intro.css'
import bg from '../../images/computer-img.png'
import {Link} from 'react-scroll'
import btnImg from '../../images/hireme.png'

const Intro = () => {
  return (
    <section id = 'intro'>
        <div className='introContent'>
            <span className='hello'> Hello,</span>
            <span className='introText'>I'm <span className='introName'> Tanmay, </span> <br/> A Passionate <span className='keywords'>Programmer</span> and <br/> a Full Stack <span className='keywords'>Web Developer</span></span>
            <p className='introPara'> I'm a skilled Programmer and a Web Designer with experience in <br/> creating visually apealing and user friendly websites. </p>
            <Link to='contactPage' smooth={true} duration={800} offset={-100}> <button className='btn' onClick={() => {
              document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
              }}> 
              <img src={btnImg} alt='Hire Me' className='btnImg' /> Hire Me </button> 
            </Link>
        </div>
        <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro

import React, { useState } from 'react';
import './navbar.css';
import logo from '../../images/letter-t-.png';
import {Link} from 'react-scroll';
import contactImg from '../../images/contact.png';
import menu from '../../images/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt='Logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={800} className = "desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-70} duration={800} className = "desktopMenuListItem">About</Link>
            <Link activeClass='active' to='project' spy={true} smooth={true} offset={-390} duration={800} className = "desktopMenuListItem">Projects</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-370} duration={800} className = "desktopMenuListItem">Skills</Link>
            <Link activeClass='active' to='educationTitle' spy={true} smooth={true} offset={-100} duration={800} className = "desktopMenuListItem">Education</Link>
        </div>
        <Link to='contactPage' smooth={true} duration={800} offset={-100}>
          <button className='desktopMenuBtn' onClick={() => {
            document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
          }}> 
          <img src={contactImg} alt='Contact-Img' className='desktopMenuImg'/> Contact Me </button>
        </Link>

        <img src={menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        <div className='navMenu' style={{display : showMenu ? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={800} className = "listItem" onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-70} duration={800} className = "listItem" onClick={() => setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='project' spy={true} smooth={true} offset={-390} duration={800} className = "listItem" onClick={() => setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-370} duration={800} className = "listItem" onClick={() => setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='educationTitle' spy={true} smooth={true} offset={-100} duration={800} className = "listItem" onClick={() => setShowMenu(false)}>Education</Link>
            <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={800} className = "listItem" onClick={() => setShowMenu(false)}>Contact Me</Link>
        </div>

    </nav>
  )
}

export default Navbar

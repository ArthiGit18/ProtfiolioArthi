import React, {useState} from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <div className='nav_Img'>
        <img src="logoRT (1).png" alt="logo" className='logoImg' />
      </div>
     
      <div className={`navlist ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="hero" smooth={true} duration={500} onClick={toggleMenu}>home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={toggleMenu}>about</Link></li>
          <li><Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>projects</Link></li>
          <li><Link to="experience" smooth={true} duration={500} onClick={toggleMenu}>education</Link></li>
          <li><Link to="links" smooth={true} duration={500} onClick={toggleMenu}>contact</Link></li>
        </ul> 
      </div>
      <div className='hamburger' onClick={toggleMenu}>
        &#9776; {/* Simple hamburger icon, can be replaced with an SVG or FontAwesome icon */}
      </div>
    </div>
  );
};

export default Navbar;

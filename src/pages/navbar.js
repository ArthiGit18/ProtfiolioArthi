import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='nav_Img'>
        <img src="logoRT (1).png" alt="logo" className='logoImg' />
    </div>
    <div className='navlist'>
        <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">skills</a></li>
            <li><a href="#">projects</a></li>
            <li><a href="#">education</a></li>
            <li><a href="#">contact</a></li>
        </ul>
    </div>
</div>
  )
}

export default Navbar
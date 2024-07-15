import React from 'react'
import Navbar from './navbar'

const Hero = () => {
    return (
        <div className=''>
           <Navbar />
            <div className='container'>
                <div className='hero_wrapper'>
                    <div className=''>
                        <h3>Name</h3>
                        <p>Desc</p>
                    </div>
                    <div className='hero_img'>
                        <img src="/assets/myself/5.jpg" alt="Myself" className='hero_img-img' />
                    </div>
                    <div className='hero_links'>
                        <p>text</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
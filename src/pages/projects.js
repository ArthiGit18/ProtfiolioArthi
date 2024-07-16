import React from 'react'
import SlideInOnVisible from '../hooks/intersectionObserver';

const Projects = () => {

    const handleLinkClick = () => {
        window.open('https://royalsmartlifestyle.com/', '_blank');
      };
    const handleLinkClickBeyondcasa = () => {
        window.open('https://beyondcasa.ae/', '_blank');
      };
    const handleLinkClickKornerston = () => {
        window.open('https://www.kornerston.com/', '_blank');
      };
    const handleLinkClickPortfolio = () => {
        window.open('https://arthimyportfolio.netlify.app/', '_blank');
      };

    return (
        <div className='container'>
        <div className='projects_wrapper'>
            <h2>Projects</h2>
            <div className='projects_list'>
                <SlideInOnVisible direction="left" id="project1">
                    <div className='projects_item1'>
                        <div className='projects_motive'>
                            <h3>Rsl lifestyle</h3>
                            <p>Built a MERN stack Travel and Tourism web app enabling bookings for hotels, cars, flights, and attractions. Enhanced frontend performance by 30% and integrated third-party APIs for seamless reservations. Developed an intuitive admin panel and collaborated cross-functionally to deliver timely solutions.</p>
                            <button className='projects_action' onClick={handleLinkClick}>Visit: RSL LIFESTYLE</button>
                        </div>
                        <img src="/assets/projects/4.png" alt="" />
                    </div>
                </SlideInOnVisible>

                <SlideInOnVisible direction="right" id="project2">
                    <div className='projects_item1'>
                        <img src="/assets/projects/5.png" alt="" />
                        <div className='projects_motive'>
                            <h3>beyond casa</h3>
                            <p>Developed a MERN-based property listing platform with robust search filters and responsive design. Optimized backend management with an intuitive admin panel.</p>
                            <button className='projects_action' onClick={handleLinkClickBeyondcasa}>Visit: BEYOND CASA</button>
                        </div>
                    </div>
                </SlideInOnVisible>

                <SlideInOnVisible direction="left" id="project3">
                    <div className='projects_item1'>
                        <div className='projects_motive'>
                            <h3>Kornerston academy</h3>
                            <p>Created a responsive academy website using Next.js and CSS for Kornerston Academy. Implemented a user-friendly interface with optimal viewing across devices, emphasizing performance and design coherence.</p>
                            <button className='projects_action' onClick={handleLinkClickKornerston}>Visit: KORNERSTON</button>
                        </div>
                        <img src="/assets/projects/1.png" alt="" />
                    </div>
                </SlideInOnVisible>

                <SlideInOnVisible direction="right" id="project4">
                    <div className='projects_item1'>
                        <img src="/assets/projects/2.png" alt="" />
                        <div className='projects_motive'>
                            <h3>My Portfolio</h3>
                            <p>I have developed my portfolio site using React, HTML, CSS, and JavaScript. It showcases my skills, projects, and professional journey in a visually appealing and interactive manner. Explore my work and see about my experience as a frontend web developer.</p>
                            <button className='projects_action' onClick={handleLinkClickPortfolio}>Visit: MY PORTFOLIO</button>
                        </div>
                    </div>
                </SlideInOnVisible>

                <SlideInOnVisible direction="left" id="project5">
                    <div className='projects_item1'>
                        <div className='projects_motive'>
                            <h3>gravity team cloned</h3>
                            <p>Utilized React, HTML, CSS, Bootstrap, and Material-UI components to clone multiple websites efficiently. Employed clean code practices to replicate diverse designs while ensuring responsiveness and functionality across different platforms and devices.</p>
                            <button className='projects_action'>Visit: GRAVITY TEAM CLONED</button>
                        </div>
                        <img src="/assets/projects/3.png" alt="" />
                    </div>
                </SlideInOnVisible>
            </div>
        </div>
    </div>
);
};


export default Projects
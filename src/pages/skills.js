import React, { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PieChartIcon from '@mui/icons-material/PieChart';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import SlideInOnVisible from '../hooks/intersectionObserver';

const settings = {
    width: 100,
    height: 100,
    value: 60,
};

const skillsData = [
    { name: 'REACT JS', value: 70 },
    { name: 'JAVASCRIPT', value: 70 },
    { name: 'BOOTSTRAP', value: 90 },
    { name: 'CSS / SCSS', value: 90 },
    { name: 'HTML', value: 90 },
    { name: 'NODE JS', value: 70 },
    { name: 'JAVA', value: 60 },
    { name: 'EXPRESS JS', value: 60 },
    { name: 'MUI', value: 90 },
];

const Skills = () => {
    const [activeSection, setActiveSection] = useState('menu');

    const handleMenuClick = () => {
        setActiveSection('menu');
    };

    const handlePieChartClick = () => {
        setActiveSection('pieChart');
    };

    const handleHomeClick = () => {
        setActiveSection('home');
    };

    const handleUserClick = () => {
        setActiveSection('home');
    };

    return (
        <div className='container_bg'>
            <div className='skills_wrapper'>
                <h2>skills</h2>
                <SlideInOnVisible direction="left" id="skill1">
                <div className='skills_dashboard'>
                    <div className='dashboard_sidebar'>
                        <div className='dashboard_actions'>
                            <div><HomeRoundedIcon onClick={handleHomeClick} /></div>
                            <div><MenuRoundedIcon onClick={handleMenuClick} /></div>
                            <div><PieChartIcon onClick={handlePieChartClick} /></div>
                        </div>
                        <div className='user_dashboard'>
                            <AccountCircleIcon onClick={handleUserClick} />
                        </div>
                    </div>
                    {activeSection === 'menu' && (
                        <div className='dashboard_homerounded'>
                            <div>
                                <h6>LANGUAGES</h6>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>JavaScript</p>
                                <p>Java</p>
                            </div>

                            <div>
                                <h6>PLATFORMS AND TOOLS</h6>
                                <p>Git</p>
                                <p>GitHub</p>
                                <p>Swagger</p>
                                <p>Postman</p>
                                <p>VS Code</p>
                                <p>IntelliJ IDEA</p>
                            </div>

                            <div>
                                <h6>FRAMEWORKS AND LIBRARIES</h6>
                                <p>React</p>
                                <p>Redux</p>
                                <p>Express.js</p>
                                <p>Node.js</p>
                                <p>Bootstrap</p>
                                <p>Material-UI (MUI)</p>
                                <p>Tailwind CSS</p>
                                <p>Sass</p>
                                <p>Formik</p>
                            </div>

                            <div>
                                <h6>DATABASES</h6>
                                <p>MongoDB</p>
                            </div>
                        </div>
                    )}
                    {activeSection === 'pieChart' && (
                        <div className='dashboard_piechart'>
                            {skillsData.map((skill, index) => (
                                <div key={index} className='gauge-container'>
                                    <Gauge
                                        {...settings}
                                        value={skill.value}
                                        cornerRadius="50%"
                                        sx={(theme) => ({
                                            [`& .${gaugeClasses.valueText}`]: {
                                                fontSize: 40,
                                                fill: 'red', // Change the font color here
                                            },
                                            [`& .${gaugeClasses.valueArc}`]: {
                                                fill: '#42b202',
                                            },
                                            [`& .${gaugeClasses.referenceArc}`]: {
                                                fill: theme.palette.text.disabled,
                                            },
                                        })}
                                    />
                                    <h6>{skill.name}</h6>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeSection === 'home' && (
                        <div className='dashboard_home'>
                            <div className='home_img'>
                                <img src="/assets/vector/2.png" alt="vector" />
                                <div className='home_myself_img'>
                                    <img src="/assets/myself/2.jpg" alt="myself" />
                                </div>
                                <h3>A.Arthi</h3>
                            </div>
                            <div className='home_content'>
                               <p> I bring a creative eye to every project and have a passion for ensuring that designs are not only visually appealing but also user-friendly. I believe in the power of collaboration and enjoy working closely with teams to bring ideas to life.</p>
                            </div>
                        </div>
                    )}
                </div>
                </SlideInOnVisible>
            </div>
        </div>
    );
};

export default Skills;

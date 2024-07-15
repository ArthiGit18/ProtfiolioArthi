import React, { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PieChartIcon from '@mui/icons-material/PieChart';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

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

    return (
        <div className='container_bg'>
            <div className='skills_wrapper'>
                <h2>skills</h2>
                <div className='skills_dashboard'>
                    <div className='dashboard_sidebar'>
                        <HomeRoundedIcon onClick={handleHomeClick} />
                        <MenuRoundedIcon onClick={handleMenuClick} />
                        <PieChartIcon onClick={handlePieChartClick} />
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
                </div>
            </div>
        </div>
    );
};

export default Skills;

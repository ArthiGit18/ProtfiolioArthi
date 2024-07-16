import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {


    return (
        <div className='container'>
            <div className='contact_wrapper'>
                <h2>Get In Touch</h2>
                <div className='contact_desc'>
                    <div className='contact_content'>
                        <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                        <div className='contact_actions'>
                            <button className='contact_btn call_btn' onClick={() => window.location.href = 'tel:+916379424101'}>
                                Call <CallIcon className='contact_id2' />
                            </button>
                            <button className='contact_btn whatsapp_btn' onClick={() => window.location.href = 'https://wa.me/916379424101'}>
                                WhatsApp <WhatsAppIcon className='contact_id2' />
                            </button>
                        </div>
                    </div>
                    <div className='contact_id'>
                        <a href="https://github.com/ArthiGit18"><GitHubIcon className='contact_id1' /></a>
                        <a href="https://www.linkedin.com/in/arthianbalagan/"><LinkedInIcon className='contact_id1' /></a>
                        <a href="https://www.instagram.com/its_a_rthi/"><InstagramIcon className='contact_id1' /></a>
                        <a href="https://leetcode.com/arthianbalagan180/">
                            <img src="/assets/contact/leetcode.png" alt="Leetcode" className='contact_id1' />
                        </a>
                        <a href="https://arthimyportfolio.netlify.app/">
                            <img src="/assets/contact/netlify.svg" alt="Netlify" className='contact_id1' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

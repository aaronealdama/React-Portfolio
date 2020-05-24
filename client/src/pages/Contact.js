import React from 'react';
import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import SocialMedia from '../components/SocialMedia';
import "../css/Contact.css";

function Contact() {
    return (
        <div>
            <Logo/>
            <div className="Contact-row">
                <NavBar/>
                <SocialMedia/>
            </div>
        </div>
    )
}

export default Contact;
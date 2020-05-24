import React from 'react';
import './index.css';
import Twitter from '../../images/twitter.png';
import Instagram from '../../images/instagram.png';
import LinkedIn from '../../images/linkedin.png';
import Github from '../../images/github.png';
import Gmail from '../../images/gmail.png';
import Phone from '../../images/phone.png';

function SocialMedia() {
    function twitterTab() {
        const win = window.open("https://twitter.com/Aaron_M_Ealdama", '_blank');
        win.focus();
    }
    function instagramTab() {
        const win = window.open("https://www.instagram.com/aaron_eal/", '_blank');
        win.focus();
    }
    function githubTab() {
        const win = window.open("https://github.com/aaronealdama", '_blank');
        win.focus();
    }
    function linkedinTab() {
        const win = window.open("https://www.linkedin.com/in/aaron-ealdama-449128182/", '_blank');
        win.focus();
    }
    return (
        <div className="SocialMedia">
            <div className="SocialMedia-row">
                <img className="SocialMedia-img" src={Twitter} alt="Twitter" id="Twitter" onClick={twitterTab}/>
                <img className="SocialMedia-img" src={Instagram} alt="Instagram" id="Instagram" onClick={instagramTab}/>
                <img className="SocialMedia-img" src={Github} alt="Github" id="Github" onClick={githubTab}/>
                <img className="SocialMedia-img" src={LinkedIn} alt="LinkedIn" id="LinkedIn" onClick={linkedinTab}/>
            </div>
            <div className="SocialMedia-row">
                <div className="SocialMedia-contact">
                    <div className="SocialMedia-card">
                        <img className="SocialMedia-img" src={Gmail} alt="Gmail" id="Gmail"/>
                        <div className="SocialMedia-cardContent">
                            <p className="SocialMedia-para">aaronealdama@gmail.com</p>
                        </div>
                    </div>
                    <div className="SocialMedia-card">
                        <img className="SocialMedia-img" src={Phone} alt="Phone" id="Phone"/>
                        <div className="SocialMedia-cardContent">
                            <p className="SocialMedia-para">734-846-0245</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia;
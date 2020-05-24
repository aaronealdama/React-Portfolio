import React from 'react';
import "./index.css";
import LogoImg from '../../images/Logo.png';

function Logo() {
    return (
        <div>
            <div className="Logo-container">
                <img src={LogoImg} alt="Aaron Ealdama Logo" className="Logo-img"/>
                <p className="Logo-paragraph">Aaron Ealdama</p>
            </div>
        </div>
    )
}

export default Logo;
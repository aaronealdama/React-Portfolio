import React from 'react';
import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import Projects from '../components/Projects';
import "../css/Portfolio.css";

function Portfolio() {
    return (
        <div className="Portfolio">
            <Logo/>
            <div className="Portfolio-row">
                <NavBar/>
                <Projects/>
            </div>
        </div>
    )
}

export default Portfolio;
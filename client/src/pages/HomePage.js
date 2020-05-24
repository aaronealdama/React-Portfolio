import React from 'react';
import NavBar from '../components/NavBar';
import HomePageInfo from '../components/HomePageInfo';
import Logo from '../components/Logo';
import '../css/HomePage.css';

function HomePage() {
    return (
        <div>
            <Logo/>
            <div className="HomePage-row">
                <NavBar/>
                <HomePageInfo/>
            </div>
        </div>
    )
}

export default HomePage;
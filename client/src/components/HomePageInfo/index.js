import React from 'react';
import './index.css';
import Church from '../../images/Church.jpg';
import Prom from '../../images/Prom.png';
import Bois from '../../images/The_bois.jpg';

function HomePageInfo() {
    return (
        <div>
            <div className="HomePageInfo">
                <div className="HomePageInfo-container">
                    <div className="HomePageInfo-row">
                        <img src={Church} id="Church" className="HomePageInfo-img" alt="Aaron Ealdama Church"/>
                        <div className="HomePageInfo-col">
                            <img src={Prom} id="Prom" className="HomePageInfo-img" alt="Aaron Ealdama Prom"/>
                            <img src={Bois} id="Bois" className="HomePageInfo-img" alt="Kuyalolos"/>
                        </div>
                    </div>
                    <div className="HomePageInfo-content">
                        <p className="HomePageInfo-para">
                            My name is Aaron Ealdama and I am a full-stack web developer recently 
                            graduated from the University of Texas Coding Bootcamp. I enjoy making
                            challenging projects and expanding my knowledge by learning new technologies.
                            If you want me to build you something you can contact me.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageInfo;
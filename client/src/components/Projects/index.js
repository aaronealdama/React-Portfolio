import React from 'react';
import Button from '../Button';
import JoyNey from '../../images/JoyNey.PNG';
import LoveQuest from '../../images/LoveQuest.PNG';
import "./index.css";

function Projects() {
    function joyneyTab() {
        const win = window.open("https://moddoo.github.io/JoyNey/", '_blank');
        win.focus();
    }
    function lovequestTab() {
        const win = window.open("https://morning-fjord-37921.herokuapp.com/", '_blank');
        win.focus();
    }
    return (
        <div className="Projects">
            <div className="Projects-row">
                <div className="Projects-project">
                    <img src={JoyNey} alt="JoyNey" id="JoyNey" onClick={joyneyTab}/>
                    <div className="Projects-projectContent">
                        <p className="Projects-projectPara">
                            This project encapsulates all of the front-end
                            web technologies and uses advanced concepts to display
                            a mobile responsive UI and UX that solves the problem
                            of trip and event planning. The front-end is built with
                            HTML, CSS, and JavaScript and it utilizes 3rd party API
                            calls to display information to the users.
                        </p>
                        <div className="Projects-btnContainer">
                            <Button link="https://github.com/Moddoo/JoyNey" project="JoyNey"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Projects-row">
                <div className="Projects-project">
                    <img src={LoveQuest} alt="LoveQuest" id="LoveQuest" onClick={lovequestTab}/>
                    <div className="Projects-projectContent">
                        <p className="Projects-projectPara">
                            This project shows off both the front-end and
                            back-end technologies. This project uses HTML, CSS,
                            JavaScript, and jQuery on the client-side. LoveQuest
                            is powered by a MySQL database and uses Node.js and 
                            Express for its webserver. LoveQuest also uses Sequelize
                            as the ORM and is built using an MVC file structure and 
                            SCRUM software development practices. This project has
                            a lot of functionality such as a map feature which shows
                            a client user location information based on the database,
                            a chat function which allows users to chat with each other
                            in real time, as well as a search functionality which lets
                            users interact with each other's profiles.
                        </p>
                        <div className="Projects-btnContainer">
                            <Button link="https://github.com/aaronealdama/Love-Quest" project="LoveQuest"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
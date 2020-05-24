import React, {useState} from 'react';
import Aaron from '../../images/Aaron.png'
import {Redirect} from 'react-router-dom';
import "./index.css";

function Introduction() {
    const [redirect, setRedirect] = useState(false);
    function handleClick() {
        setRedirect(true);
    }
    return (
        <div>
            {redirect ? <Redirect to="/home"/> : ""}
            <div className="Introduction">
                <div className="Introduction-container">
                    <div className="Introduction-row">
                        <img src={Aaron} alt="Aaron Ealdama" className="Introduction-img"/>
                    </div>
                    <div className="Introduction-containerContent">
                        <div className="Introduction-row">
                            <p className="Introduction-paragraph">
                                Welcome to my portofolio!
                            </p>
                        </div>
                        <div className="Introduction-row">
                            <button onClick={handleClick} className="Introduction-btn">Click Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction
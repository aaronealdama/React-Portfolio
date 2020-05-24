import React from 'react';
import "./index.css";

function Button(props) {
    const link = props.link;
    const project = props.project;
    return (
        <div>
            <div className="Button">
                <a target="_blank" className="Button-link" href={link}>{project}</a>
            </div>
        </div>
    )
}

export default Button;

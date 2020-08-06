import React from 'react';
import reduxIcon from "../images/icons8-redux-48.png";

export default function Skills() {
    return (
        <div className="skills">
            <h2 className="skills__title">Skills and technologies</h2>
            <ul className="skills__list">
                <li className="skills__list__element">
                <i className="fab fa-github"></i>
                </li>
                <li className="skills__list__element">
                <i className="fab fa-css3-alt"></i>
                </li>
                <li className="skills__list__element">
                <i className="fab fa-html5"></i>
                </li>
                <li className="skills__list__element">
                <i className="fab fa-sass"></i>
                </li>
                <li className="skills__list__element">
                <i className="fab fa-js"></i>
                </li>
                <li className="skills__list__element">
                <i className="fab fa-react"></i>
                </li>
                <li className="skills__list__element">
                <i className="fab fa-npm"></i>
                </li>
                <li className="skills__list__element">
                    <img className="skills__list__element__icon" src={reduxIcon} alt="redux-icon" />
                </li>
                <li className="skills__list__element">
                <i className="fab fa-gulp"></i>
                </li>
            </ul>
        </div>
    )
}

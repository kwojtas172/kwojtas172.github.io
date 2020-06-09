import React, { Component } from 'react';
import photo from "../photos/bmi.jpg";

export default class ProjectBMI extends Component {
    render() {
        return (
            <section className={this.props.class ? this.props.class : `hidden`}>
                <div className="main-content_project_container-img">
                    <img src={photo} alt="bmi calc" className="project-img left-img" />
                    <a className="main-content_project_link live live-left" href="https://kwojtas172.github.io/BMI-calculator/dist/" target="_blank">Live</a>
                    <a className="main-content_project_link repo repo-left" href="https://github.com/kwojtas172/BMI-calculator" target="_blank">Repo</a>
                </div>
                <div className="main-content_project_wrapper">
                    <h2>
                        BMI calculator
                </h2>
                    <p>
                    The application calculates the BMI based on the entered data (weight in kilograms and height in centimeters). In addition to the numerical value, the user gets a descriptive answer (normal weight, underweight, overweight and obesity, suitably colored: green, yellow and red).
                    </p>
                    <p>
                    Project created in HTML / SCSS / JS / Webpack
                </p>
                </div>
            </section>
        )
    }
}

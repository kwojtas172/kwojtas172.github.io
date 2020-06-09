import React, { Component } from 'react';
import Form from "./Form";

export default class Contact extends Component {
    render() {
        return (
            <section className={this.props.class ? this.props.class : `hidden`}>
                <div className={this.props.class ? `main-content_contact_content` : ``}>
                    <div className="main-content_contact_content_title">
                        <i class="fas fa-id-card"></i>
                        <h2>Contact me!</h2>
                    </div>
                    <ul className="main-content_contact_content_list">
                        <li><i class="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/kamil-wojtas/" target="_blank">https://www.linkedin.com/in/kamil-wojtas/</a></li>
                        <li><i class="far fa-envelope"></i><a href="mailto:k.wojtas172@gmail.com">k.wojtas172@gmail.com</a></li>
                        <li> <i class="fab fa-github"></i><a href="https://github.com/kwojtas172" target="_blank">https://github.com/kwojtas172</a></li>
                    </ul>
                    <h3>
                        ...or send me quick message
                    </h3>
                    <Form />
                </div>
            </section>
        )
    }
}

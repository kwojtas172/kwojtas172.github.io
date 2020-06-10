import React, { Component } from 'react';
import accessSpreadsheet from "./spreadsheet"


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            text: "",
            isSubmit: false,
            isSuccses: false
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            isSubmit: true
        })

        if(this.state.name.length > 1 && this.state.email.length > 2 && this.state.email.indexOf("@") !== -1 && this.state.text.length > 3) {
            accessSpreadsheet(this.state.name, this.state.email, this.state.text);
            this.setState({
            name: "",
            email: "",
            text: "",
            isSubmit: false,
            isSuccses: true
        })
        }

        
    }
    
    render() {
        return (
            <form className="main-content_contact_content_form" onSubmit={this.handleSubmit}>
                {this.state.isSubmit && this.state.name.length < 2 && <p className="main-content_contact_content_form_wrong">Your name is too short!</p>}
                {this.state.isSubmit && (this.state.email.length < 3 || this.state.email.indexOf("@") === -1) && <p className="main-content_contact_content_form_wrong">Your e-mail address is too short or does not containg '@'!</p>}
                {this.state.isSubmit && this.state.text.length < 4 && <p className="main-content_contact_content_form_wrong">Your message is too short!</p>}
                {this.state.isSuccses && <p className="main-content_contact_content_form_good">Your message has been sent successfully!</p>}

                <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value, isSuccses: false})} placeholder="enter your name"/>
                <input type="email" value={this.state.email} onChange={e => this.setState({email: e.target.value, isSuccses: false})} placeholder="enter your e-mail" />
                <textarea value={this.state.text} onChange={e => this.setState({text: e.target.value, isSuccses: false})} />
                <input type="submit" value="Send" />
                {/* {} */}
            </form>
        )
    }
}

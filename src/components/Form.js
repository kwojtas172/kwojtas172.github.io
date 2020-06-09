import React, { Component } from 'react';
import accessSpreadsheet from "./spreadsheet"


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            text: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        accessSpreadsheet(this.state.name, this.state.email, this.state.text);
        this.setState({
            name: "",
            email: "",
            text: ""
        })
        
    }
    
    render() {
        return (
            <form className="main-content_contact_content_form" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})} placeholder="enter your name"/>
                <input type="email" value={this.state.email} onChange={e => this.setState({email: e.target.value})} placeholder="enter your e-mail" />
                <textarea value={this.state.text} onChange={e => this.setState({text: e.target.value})} />
                <input type="submit" value="Send" />
                {/* {} */}
            </form>
        )
    }
}

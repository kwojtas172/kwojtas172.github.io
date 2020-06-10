import React, { Component } from 'react';
import AboutMe from "./AboutMe";
import ProjectSoccerApp from "./ProjectSoccerApp";
import ProjectBlog from "./ProjectBlog";
import ProjectToDo from "./ProjectToDo";
import ProjectBMI from "./ProjectBMI";
import EmptyBlock from "./EmptyBlock";
import Contact from "./Contact";

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            position: "",
            isSoccer: "",
            isBlog: "",
            isToDo: "",
            isBMI: "",
            isContact: ""
        }
    }

    componentDidMount() {
        
        this.handleScroll = () => {
            this.setState({
                position: window.pageYOffset
            })

            if(this.state.position > 320) {
                this.setState({
                    isSoccer: "main-content_project"
                })
            }
            if(this.state.position > 900) {
                this.setState({
                    isBlog: "main-content_project"
                })
            }

            if(this.state.position > 1500) {
                this.setState({
                    isToDo: "main-content_project"
                })
            }

            if(this.state.position > 2150) {
                this.setState({
                    isBMI: "main-content_project"
                })
            }

            if(this.state.position > 2650) {
                this.setState({
                    isContact: "main-content_contact"
                })
            }
        }

        window.addEventListener("scroll", this.handleScroll)
    }   


    render() {
        return (
            <main className="main-content">
                <AboutMe />
                <ProjectSoccerApp class={this.state.isSoccer} />
                <ProjectBlog class={this.state.isBlog} />
                <ProjectToDo class={this.state.isToDo} />
                <ProjectBMI class={this.state.isBMI} />
                <EmptyBlock />
                <Contact class={this.state.isContact} />
            </main>
        )
    }
}

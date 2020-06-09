import React, { Component } from 'react';
import photo from "../photos/todo.jpg";

export default class ProjectToDo extends Component {
    render() {
        return (
            <section className={this.props.class ? this.props.class : `hidden`}>
                <div className="main-content_project_container-img">
                    <img src={photo} alt="toDo app" className="project-img right-img" />
                    <a className="main-content_project_link live live-right" href="https://kwojtas172.github.io/toDo/" target="_blank">Live</a>
                    <a className="main-content_project_link repo repo-right" href="https://github.com/kwojtas172/toDo" target="_blank">Repo</a>
                </div>
                <div className="main-content_project_wrapper">
                    <h2>
                        To Do App
                </h2>
                    <p>
                    To Do App. You can add tasks with the title and description to the application. Tasks can be marked as finished (there is also an option to undo this change) - in the form of strikethrough text and completely removed from the list of tasks to be performed.
                    </p>
                    <p>
                    Project made in HTML / CSS / React / JS
                </p>
                </div>
            </section>
        )
    }
}

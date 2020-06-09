import React, { Component } from 'react';
import photo from "../photos/blog.jpg";

export default class ProjectBlog extends Component {
    render() {
        return (
            <section className={this.props.class ? this.props.class : `hidden`}>
                <div className="main-content_project_container-img">
                    <img src={photo} alt="blog" className="project-img left-img" />
                    <a className="main-content_project_link live live-left" href="https://kwojtas172.github.io/blog/" target="_blank">Live</a>
                    <a className="main-content_project_link repo repo-left" href="https://github.com/kwojtas172/blog" target="_blank">Repo</a>
                </div>
                <div className="main-content_project_wrapper">
                    <h2>
                        Example blog
                    </h2>
                    <p>
                        Here is an example blog. The site is kept in bright, unobtrusive colors. The look should be simple and at the same time not discourage the recipient from browsing the content placed on the website.</p>
                    <br></br>
                    <br></br>
                    <p>The technologies used to create it are HTML / SCSS / React
                    </p>
                </div>
            </section>
        )
    }
}

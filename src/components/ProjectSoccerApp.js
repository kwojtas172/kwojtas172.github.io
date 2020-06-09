import React, { Component } from 'react';
import photo from "../photos/soccer.jpg";

export default class ProjectSoccerApp extends Component {
    render() {
        return (
            <section className={this.props.class ? this.props.class : `hidden`} id="projects">
                <div className="main-content_project_container-img">
                    <img src={photo} alt="soccer" className="project-img right-img" />
                    <a className="main-content_project_link live live-right" href="https://kwojtas172.github.io/scores-app" target="_blank">Live</a>
                    <a className="main-content_project_link repo repo-right" href="https://github.com/kwojtas172/scores-app" target="_blank">Repo</a>
                </div>
                <div className="main-content_project_wrapper">
                    <h2>
                        Football Scores
                    </h2>
                    <p>
                        My latest project. And the first so extensive. When creating this application, I used many technologies (React, Redux, JS, HTML, Sass) that I have learned in recent months.</p>
                    <br></br>
                    <br></br>
                    <p>Football Scores is an application that shows the results of football games (sorts them into live games, games ended, scheduled games). It allows you to add your favorite games (thanks to which we can quickly check the result of the match we are interested in). Additional functionality is the ability to check the current table (they can be sorted by points, wins or goal difference) or subsequent matches. A calendar is also available, thanks to which we can choose a specific date and check whether any games are played on a given day. To facilitate the use of the application I have introduced a night mode (dimming light colors), which should make it easier to use the application at night.</p>
                    <br></br>
                    <br></br>

                    <p>The application is constantly being developed. I have many ideas on how to implement them in the project.
                    </p>
                </div>
            </section>
        )
    }
}

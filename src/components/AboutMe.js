import React, { Component } from 'react';
import photo from "../photos/cup-of-coffee-1280537_1920.jpg";
import logo from "../photos/redux.jpg";

export default class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacityClass: ""
        }
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                opacityClass: "active-opacity"
            })
        }, 100)
    }

    // componentDidMount() {
    //     this.setState({
    //         opacityClass: "active-opacity"
    //     })
    // }

    render() {
        return (
            <section className={`main-content_about-me ${this.state.opacityClass}`} id="about-me">
                <img src={photo} alt="cup of coffee and laptop" />
                <div className="main-content_about-me_wrapper">
                    <h2>
                        About me
                    </h2>
                    <p>
                        Hi, my name is Kamil. I am a front-end developer. I catch up on my short experience in programming by willingness, enthusiasm and quick learning. I like to gain new experiences and I am open to various options. Technologies in which I feel strong:
                    <ul>
                            <li><i class="fab fa-js"></i>Java Script ES6</li>
                            <li><i class="fab fa-react"></i>React</li>
                            <li><img src={logo} />Redux</li>
                            <li><i class="fab fa-html5"></i>HTML 5</li>
                            <li><i class="fab fa-css3-alt"></i>CSS 3</li>
                            <li><i class="fab fa-sass"></i>Sass</li>
                        </ul>

                        <br></br>

                On this page I have posted some of my projects - the others are available in the GH repositories. You can check what progress I've made in the last six months.



                    </p>
                </div>
            </section>
        )
    }
}

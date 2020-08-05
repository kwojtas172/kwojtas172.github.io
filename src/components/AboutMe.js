import React, { Component } from 'react'

export default class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width1: 6,
            width2: 5,
            width3: 7,
            rotate1: 0,
            rotate2: 40,
            rotate3: 100,
            postion: null,
            aboutMeClass: "about-me__description"
        }
    }

    changeWidths = () => {
        const width1Change = Math.floor(Math.random() * (Math.floor(20) - Math.ceil(1) + 1)) + Math.ceil(1);
        const width2Change = Math.floor(Math.random() * (Math.floor(20) - Math.ceil(1) + 1)) + Math.ceil(1);
        const width3Change = Math.floor(Math.random() * (Math.floor(20) - Math.ceil(1) + 1)) + Math.ceil(1);
        this.setState({
            width1: width1Change,
            width2: width2Change,
            width3: width3Change
        })
    }

    changeRotates = () => {
        const rotate1Change = Math.floor(Math.random() * ((Math.floor(36) - Math.ceil(-36) + 1)) + Math.ceil(-36))*10;
        const rotate2Change = Math.floor(Math.random() * ((Math.floor(36) - Math.ceil(-36) + 1)) + Math.ceil(-36))*10;
        const rotate3Change = Math.floor(Math.random() * ((Math.floor(36) - Math.ceil(-36) + 1)) + Math.ceil(-36))*10;
        this.setState({
            rotate1: rotate1Change,
            rotate2: rotate2Change,
            rotate3: rotate3Change
        })
       
    }
    
    interval = () => {
        setInterval(() => {
            this.changeWidths();
            this.changeRotates();
        }, 3000)
    }


    handleScroll = () => {
        this.setState({
            postion: window.pageYOffset
        })
        if(this.state.postion>250) {
            this.setState({
                aboutMeClass: "about-me__description about-me__description--animation"
            })
        }
    }
    

    componentDidMount() {
        this.interval();
        window.addEventListener("scroll", this.handleScroll)
    }
    
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        const {width1, width2, width3, rotate1, rotate2, rotate3, aboutMeClass} = this.state;
        return (
            <section className="about-me" id="aboutMe">
            <div className="about-me__circle">
                <div className="about-me__circle__line" style={{width: `${width1}rem`, transform: `rotate(${rotate1}deg)`}}>
                    <div className="about-me__circle__line-circle" style={{left: `${width1-0.5}rem`}}></div>
                </div>
                <div className="about-me__circle__line" style={{width: `${width2}rem`, transform: `rotate(${rotate2}deg)`}}>
                    <div className="about-me__circle__line-circle" style={{left: `${width2-0.5}rem`}}></div>
                </div>
                <div className="about-me__circle__line" style={{width: `${width3}rem`, transform: `rotate(${rotate3}deg)`}}>
                    <div className="about-me__circle__line-circle" style={{left: `${width3-0.5}rem`}}></div>
                </div>
            </div>
            <p className={aboutMeClass}>
            I am a graduate of Coders Lab and I am looking for a job as a
            programmer Javascript. In programming, I liked the fact that
            problems are not uncommon can be solved in many ways, and
            projects where it takes participation can be interesting, challenging
            and giving at the same time a lot of satisfaction. <br></br>
            I am looking for a
            job in which I can prove myself unconventional thinking and an
            extraordinary approach. I am confident that as a programmer I will
            have the chance to do so show.
            </p>
        </section>
        )
    }
}

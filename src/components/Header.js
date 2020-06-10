import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myPortf: "",
            counter: 0,
            position: "",
            class: "",
            display: "",
            displayHideMenu: "none"
        }
    }

    componentDidMount() {
        this.toCompleteWord = setInterval(() => {
                const word = "My portfolio";
                if(window.innerWidth >=720) {
                    this.setState({
                    myPortf: this.state.myPortf + word[this.state.counter],
                    counter: this.state.counter + 1
                    })
                }
                if(window.innerWidth < 720) {
                    this.setState({
                        myPortf: word,
                        // counter: this.state.counter + 1
                        });
                        clearInterval(this.toCompleteWord)
                }
                if(word.length === this.state.myPortf.length) {
                    clearInterval(this.toCompleteWord)
                }
            }, 200);


            this.handleScroll = () => {
                this.setState({
                    position: window.pageYOffset
                })
                if(this.state.position > 5) {
                    this.setState({
                        class: "fixed"
                    })
                } else {
                    this.setState({
                        class: ""
                    })
                }
                console.log(this.state.position)
            }

            this.changeDisplay = () => {
                this.setState({
                    display: window.innerWidth < 720 ? "none" : "",
                    displayHideMenu: window.innerWidth < 720 ? "block" : "none"
                })
            }

            window.addEventListener("scroll", this.handleScroll);
            window.addEventListener('resize', this.changeDisplay);
        
    }

        handleClick = () => {
            this.setState({
                display: this.state.display === "none" ? "block" : "none"
            })
        }
    
    render() {
        return (
            <header className={`header-wrapper ${this.state.class}`}>
                <div className="header-wrapper_logo">
                    <h1 onClick={() => window.scrollTo(0, 0)}>{this.state.myPortf}</h1>
                    {console.log(window.innerHeight)}
                </div>
                <nav className="header-wrapper_nav">
                    <span className="hide-menu-wrapper" onClick={this.handleClick}>
                    <span className="hide-menu" style={{display: this.state.displayHideMenu}}></span>
                    </span>
                    <ul className="header-wrapper_nav_list" style={{display: this.state.display}}>
                        <li><a href="#about-me">About me</a></li>
                        <li><a href="#projects">My projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;

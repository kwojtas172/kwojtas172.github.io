import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myPortf: "",
            counter: 0,
            position: "",
            class: ""
        }
    }

    componentDidMount() {
        this.toCompleteWord = setInterval(() => {
                const word = "My portfolio";
                if(window.innerHeight >=720) {
                    this.setState({
                    myPortf: this.state.myPortf + word[this.state.counter],
                    counter: this.state.counter + 1
                    })
                }
                if(window.innerHeight < 720) {
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

            window.addEventListener("scroll", this.handleScroll)
        
    }
    
    render() {
        return (
            <header className={`header-wrapper ${this.state.class}`}>
                <div className="header-wrapper_logo">
                    <h1 onClick={() => window.scrollTo(0, 0)}>{this.state.myPortf}</h1>
                    {console.log(window.innerHeight)}
                </div>
                <nav className="header-wrapper_nav">
                    <ul className="header-wrapper_nav_list">
                        <li><a>About me</a></li>
                        <li><a>My projects</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;

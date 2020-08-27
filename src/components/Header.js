import React, { useState }  from 'react';
import { Link } from 'react-scroll';

export default function Header() {

    const [display, setDisplay] = useState("header__nav__list--hidden");
    const [menu, setMenu] = useState("header__nav__menu");

    const showHidden = () => {
        setDisplay(display==="header__nav__list--visible"?"header__nav__list--hidden":"header__nav__list--visible");
        setMenu(menu==="header__nav__menu"?"header__nav__menu--to-hidden":"header__nav__menu");
    }

    return (
        <header className="header">
            <nav className="header__nav">
                <span className={`header__nav__menu ${menu}`} onClick={showHidden}></span>
                <ul className={`header__nav__list ${display}`}>
                    <li className="header__nav__list__element"><Link className="header__nav__list__element__link" to="aboutMe" spy={true} smooth={true} offset={50} duration={500}>About me</Link></li>
                    <li className="header__nav__list__element"><Link className="header__nav__list__element__link" to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
                    <li className="header__nav__list__element"><Link className="header__nav__list__element__link" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

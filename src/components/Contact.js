import React, {useState, useEffect} from 'react';
import github from "../images/github.png";
import gmail from "../images/gmail.png";
import linkedin from "../images/linkedin.png";

export default function Contact() {
    
    const [introClass, setIntroClass] = useState("contact__form--intro");

    const changeClass = () => {
        setIntroClass("")
    }

    useEffect(() => {
        changeClass()
    })


    return (
        <section className="contact" id="contact">
            <h3 className="contact__tittle">If you want to contact me, please send me message</h3>
            <article className="contact__info">
                <ul className="contact__info__list">
                    <li className="contact__info__list__element">
                        <img src={linkedin} alt="linkedin-icon" className="contact__info__list__element__img" />
                        <a href="https://www.linkedin.com/in/kamil-wojtas/" target="_blank" rel="noopener noreferrer" className="contact__info__list__element__link">linkedin profil</a>
                    </li>
                    <li className="contact__info__list__element">
                        <img src={github} alt="github-icon" className="contact__info__list__element__img" />
                        <a href="https://www.github.com/kwojtas172" target="_blank" rel="noopener noreferrer" className="contact__info__list__element__link">github repository</a>
                    </li>
                    <li className="contact__info__list__element">
                        <img src={gmail} alt="gmail-icon" className="contact__info__list__element__img" />
                        <a href="mailto:k.wojtas172@gmail.com" className="contact__info__list__element__link">send me e-mail</a>
                    </li>
                </ul>
            </article>
            <form className="contact__form">
                <input type="text" className={`contact__form__input ${introClass}`} placeholder="Enter your name" />
                <input type="e-mail" className={`contact__form__input ${introClass}`} placeholder="Enter your e-mail" />
                <textarea className={`contact__form__input contact__form__input--text ${introClass}`} placeholder="Enter your message" />
                <input type="submit" className={`contact__form__input contact__form__input--btn ${introClass}`} value="Send" />
            </form>
        </section>
    )
}

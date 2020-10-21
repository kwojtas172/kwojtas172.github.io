import React, {useState, useEffect} from 'react';
import github from "../images/github.png";
import gmail from "../images/gmail.png";
import linkedin from "../images/linkedin.png";

export default function Contact() {
    
    const [introClass, setIntroClass] = useState("contact__form--intro");
    const [formName, setFormName] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formMessage, setFormMessage] = useState("");
    const [formSummary, setFormSummary] = useState("");
    const [formSummaryColor, setFormSummaryColor] = useState("");

    const changeClass = () => {
        setIntroClass("")
    }

    const handleFormName = e => {
        setFormName(e.target.value)
    }

    const handleFormEmail = e => {
        setFormEmail(e.target.value)
    }

    const handleFormMessage = e => {
        setFormMessage(e.target.value)
    }

    const formSubmit = e => {
        e.preventDefault();
        if(formName.length>2 && formEmail.length>3 && formMessage.length>5) {
            setFormSummary("Thanks, message has been sent!");
            setFormSummaryColor("contact__form__summary--success");
            const data = {name: formName, email: formEmail, message: formMessage}
            fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                })
                .then(response => response.json())
                .then(data => {
                console.log('Success:', data);
                })
                .catch((error) => {
                console.error('Error:', error);
                });
        } else {
            setFormSummary("Check your name, your e-mail or your message and correct it, please!");
            setFormSummaryColor("contact__form__summary--failure");
        }
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
            <form onSubmit={e => formSubmit(e)} className="contact__form">
                <p className={`contact__form__summary ${formSummaryColor}`} >{formSummary}</p>
                <input type="text" value={formName} onChange={e=>handleFormName(e)} className={`contact__form__input ${introClass}`} placeholder="Enter your name" name="name" />
                <input type="email" value={formEmail} onChange={e=>handleFormEmail(e)} className={`contact__form__input ${introClass}`} placeholder="Enter your e-mail" name="email" />
                <textarea value={formMessage} onChange={e=>handleFormMessage(e)} className={`contact__form__input contact__form__input--text ${introClass}`} placeholder="Enter your message" name="message" />
                <input type="submit" className={`contact__form__input contact__form__input--btn ${introClass}`} value="Send" />
            </form>
        </section>
    )
}

import React, {useState, useEffect} from 'react'

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
                        <i className="contact__info__list__element fab fa-linkedin"></i>
                    </li>
                    <li className="contact__info__list__element">
                        <i className="contact__info__list__element fab fa-github-square"></i>
                    </li>
                    <li className="contact__info__list__element">
                        <i className="contact__info__list__element far fa-envelope"></i>
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

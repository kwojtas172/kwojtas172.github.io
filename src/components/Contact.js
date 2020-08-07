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
            <form className="contact__form">
                <input type="text" className={`contact__form__input ${introClass}`} placeholder="Enter your name" />
                <input type="e-mail" className={`contact__form__input ${introClass}`} placeholder="Enter your e-mail" />
                <textarea className={`contact__form__input contact__form__input--text ${introClass}`} placeholder="Enter your message" />
                <input type="submit" className={`contact__form__input contact__form__input--btn ${introClass}`} value="Send" />
            </form>
        </section>
    )
}

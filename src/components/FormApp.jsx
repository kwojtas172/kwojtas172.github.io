import React from 'react';
import styled from "styled-components";


const Form = styled.form`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;

    @media (min-width: 720px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr auto;
        max-width: 50rem;
    }
`

const Input = styled.input`
    align-self: center;
    max-width: 15rem;
    height: 3rem;
    background-color: grey;
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    padding: 1rem;
    border-radius: 0.35rem;
    border: solid 0.5rem grey;

    ::placeholder {
        color: #ffffff;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.2rem;
    }
`

const TextArea = styled.textarea`
    max-width: 15rem;
    height: 10rem;
    background-color: grey;
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    padding: 1rem;
    border-radius: 0.35rem;
    border: solid 0.5rem grey;

    ::placeholder {
        color: #ffffff;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.2rem;
    }

    @media (min-width: 720px) {
        grid-column: 1/3;
        min-width: 45rem;
    }
`
const Button = styled.button`
    width: 5rem;
    height: 2rem;
    background-color: grey;
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    line-height: 1rem;
    border-radius: 0.35rem;
    border: solid 0.5rem grey;

    @media (min-width: 720px) {
        grid-column: 1/3;
    }
`

const FormApp = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [text, setText] = React.useState('');

    const onSubmit = e => {
        e.preventDefault();
        console.log('poszło');
        setName('');
        setEmail('');
        setText('');
    }

    return (
        <Form onSubmit={e=>onSubmit(e)}>
            <Input type='name' placeholder='Wpisz swoje imię' value={name} onChange={e=>setName(e.target.value)}/>
            <Input type='email' placeholder='Wpisz swój e-mail' value={email} onChange={e=>setEmail(e.target.value)}/>
            <TextArea placeholder='Wpisz swoją wiadomość' value={text}  onChange={e=>setText(e.target.value)}/>
            <Button type='submit'>Wyślij</Button>
        </Form>
    );
}

export default FormApp;

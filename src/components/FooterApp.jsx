import React from 'react';
import styled from "styled-components";

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5rem;
    background-color: grey;
    color: #ffffff;

`

const Link = styled.a`
    color: #ffffff;

    i {
        @media (min-width: 720px) {
            font-size: 2rem;
    }
    }
`


const FooterApp = () => {
    return (
        <Footer>
            <Link href='https://www.linkedin.com/in/kamil-wojtas/' target='_blank' rel='noreferrer'>
                <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link href='https://github.com/kwojtas172' target='_blank' rel='noreferrer'>
                <i className="fab fa-github"></i>
            </Link>
            <Link href='mailto:kwojtas172@gmail.com' target='_blank' rel='noreferrer'>
                <i className="far fa-envelope"></i>
            </Link>
        </Footer>
    );
}

export default FooterApp;

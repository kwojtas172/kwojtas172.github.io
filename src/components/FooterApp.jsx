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


const FooterApp = () => {
    return (
        <Footer>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-github"></i>
            <i className="far fa-envelope"></i>
        </Footer>
    );
}

export default FooterApp;

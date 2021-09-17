import React from 'react';
import styled from "styled-components";

const Header = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    color: #3b3a30;
    background-color: #f0f0f0;
`

const Title = styled.h1 `
    margin: 1rem;
    font-size: 2rem;
`

const TitleDescription = styled.p`
    text-align: center;
    margin: 2rem auto;
    margin-top: 0;
    font-size: 1.2rem;
    max-width: 700px;
    
`

const HeaderApp = () => {
    return (
        <Header>
            <Title>Cześć, tutaj Kamil!</Title>
            <TitleDescription>
                Jestem web developerem - pracuję głównie z frontendową warstwą serwisów internetowych. W swojej pracy wykorzystuję HTML (w najnowszej wersji HTML5, zawierającej semantyczne tagi), CSS (CSS3 z preprocesorem Sass, gwarantujące dostowanie styli do każdego urządzenia, także starszych wersji przeglądarek) i JavaScript (w standardzie ES6). Znam framwework React (wraz z React Routing oraz Styled Components).
            </TitleDescription>
            <TitleDescription>
                Dodatkowo posiadam również wiedzę na temat backendu - używam Node.js (wraz z frameworkiem Express.js) oraz korzystam z baz danych MongoDB, co sprawia, że mogę zbudować kompletny serwis internetowy od podstaw lub wspomóc jego budowę na różnych etapach (od zakodowania wyglądu do postawienia API do komunikowania z serwerem).
            </TitleDescription>
        </Header>
    );
}

export default HeaderApp;

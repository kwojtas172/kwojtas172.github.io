import React from 'react';
import styled from "styled-components";
import ProjectsApp from './ProjectsApp';
import FormApp from './FormApp';
import FooterApp from './FooterApp';


const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const MainApp = () => {
    return (
        <Main>
            <ProjectsApp />
            <FormApp />
            <FooterApp />
        </Main>
    );
}

export default MainApp;

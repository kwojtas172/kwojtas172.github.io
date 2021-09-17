import React from 'react';
import styled from "styled-components";
import ProjectsApp from './ProjectsApp';


const Main = styled.main`
    width: 100%;
`

const MainApp = () => {
    return (
        <Main>
            <ProjectsApp />
        </Main>
    );
}

export default MainApp;

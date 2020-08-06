import React from 'react';
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Content() {
    return (
        <main>
            <Skills />
            <AboutMe />
            <Projects />
        </main>
    )
}

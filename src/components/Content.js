import React from 'react';
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Content() {
    return (
        <main>
            <Skills />
            <AboutMe />
            <Projects />
            <Contact />
        </main>
    )
}

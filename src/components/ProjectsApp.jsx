import React from 'react';
import styled from "styled-components";
import arrOfProjects from '../data/projects';

const Section = styled.section`
    width: 100%;
`

const Article = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 1rem 0;
`

const Photo = styled.img`
    width: 100%;
    height: auto;
    transition: 0.4s;
`

const DescriptionsWrapper = styled.div`
    width: 100%;
    display: none;
    flex-direction: column;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    text-align: center;

    .visible {
        display: flex;
    }
`

const Link = styled.a`
    text-decoration: none;
    color: #ffffff;
    font-weight: 600;
`

const ProjectDescription = styled.p`
    width: 90%;
    color: #ffffff;
    font-weight: 600;
`

const ProjectsApp = () => {


    const showProject = e => {
        const projectsSection = document.getElementById('projects');
        const projectsTop = projectsSection.getBoundingClientRect().top
        if(projectsTop < 120) {
            const projects = projectsSection.getElementsByTagName('article');
            const arrOfProjects = Array.prototype.slice.call(projects)
            arrOfProjects.forEach((project, index) => {
                if(project.getBoundingClientRect().top < 120) {
                    projects[index].getElementsByTagName('img')[0].style.filter = 'brightness(25%)'
                    projects[index].getElementsByTagName('div')[0].style.display = 'flex'
                }
            });
            if(projects[projects.length-1].getElementsByTagName('div')[0].style.display === 'flex') document.removeEventListener('scroll', showProject)
        }
    }


    React.useEffect(() => {
        
        document.addEventListener('scroll', showProject)
    })
    
    return (
        <Section id='projects'>
            {arrOfProjects.map((project, index) => {
                return <Article key={index} data-id={index}>
                    <Photo alt='' src={project.img} />
                    <DescriptionsWrapper>
                        <Link href={project.url}>{project.title}</Link>
                        <ProjectDescription>{project.description}</ProjectDescription>
                    </DescriptionsWrapper>
                </Article>
            })}
        </Section>
    );
}

export default ProjectsApp;

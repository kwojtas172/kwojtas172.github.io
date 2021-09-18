import React from 'react';
import styled from "styled-components";

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
`

const ProjectDescription = styled.p`
    width: 100%;
`


const arrOfProjects = [{title: 'Pasieka pod Lasem', description: 'strona o pasiece', url: 'https://pasieka-pod-lasem.pl/', img: '../images/bee-garden.jpg'}, {title: 'Football Scores', description: 'strona o wynikach sportowych', url: 'https://kwojtas172.github.io/scores-app/', img: '../images/football-scores.jpg'}, {title: 'Zaplanuj jedzonko', description: 'strona o planowaniu diety', url: 'https://kwojtas172.github.io/plan-a-diet', img: '../images/plan-a-diet.jpg'}, {title: 'Oddaj rzeczy', description: 'strona o oddawaniu rzeczy', url: 'https://kwojtas172.github.io/share-items', img: '../images/share-items.jpg'}, {title: 'ToDo App', description: 'strona o dodawaniu zadań', url: 'https://kwojtas172.github.io/toDo/', img: '../images/todo.jpg'}, {title: 'BMI Calculator', description: 'strona o obliczaniu BMI', url: 'https://kwojtas172.github.io/BMI-calculator/dist/', img: '../images/bmi-calculator.jpg'}, {title: 'Rzut kostką', description: 'strona o rzucaniu kostką', url: 'https://kwojtas172.github.io/cube-first_project/', img: '../images/cube.jpg'}]

const ProjectsApp = () => {


    const showProject = e => {
        const projectsSection = document.getElementById('projects');
        const projectsTop = projectsSection.getBoundingClientRect().top
        if(projectsTop < 120) {
            const projects = projectsSection.getElementsByTagName('article');
            const arrOfProjects = Array.prototype.slice.call(projects)
            arrOfProjects.forEach((project, index) => {
                if(project.getBoundingClientRect().top < 120) {
                    console.log(projects[index].getElementsByTagName('div')[0]);

                    projects[index].getElementsByTagName('div')[0].style.display = 'flex'
                }
            });
            if(projects[projects.length-1].getElementsByTagName('div')[0].style.display === 'flex') document.removeEventListener(showProject)
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

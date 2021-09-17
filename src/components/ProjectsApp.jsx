import React from 'react';
import styled from "styled-components";


const Section = styled.section`
    width: 100%;
`

const Article = styled.article`
    width: 100%;
    display: flex;
    flex-direction: row;
`

const Photo = styled.img`
    width: 50%;
    height: auto;
`

const DescriptionsWrapper = styled.div`
    width: 50%;
    flex-direction: column;
`

const Link = styled.a`
    text-decoration: none;
`

const ProjectDescription = styled.p`
    width: 100%;
`


const arrOfProjects = [{title: 'Pasieka pod Lasem', description: 'strona o pasiece', url: 'https://pasieka-pod-lasem.pl/', img: '../images/bee-garden.jpg'}, {title: 'Football Scores', description: 'strona o wynikach sportowych', url: 'https://kwojtas172.github.io/scores-app/', img: '../images/football-scores.jpg'}, {title: 'Zaplanuj jedzonko', description: 'strona o planowaniu diety', url: 'https://kwojtas172.github.io/plan-a-diet', img: '../images/plan-a-diet.jpg'}, {title: 'Oddaj rzeczy', description: 'strona o oddawaniu rzeczy', url: 'https://kwojtas172.github.io/share-items', img: '../images/share-items.jpg'}, {title: 'ToDo App', description: 'strona o dodawaniu zadań', url: 'https://kwojtas172.github.io/toDo/', img: '../images/todo.jpg'}, {title: 'BMI Calculator', description: 'strona o obliczaniu BMI', url: 'https://kwojtas172.github.io/BMI-calculator/dist/', img: '../images/bmi-calculator.jpg'}, {title: 'Rzut kostką', description: 'strona o rzucaniu kostką', url: 'https://kwojtas172.github.io/cube-first_project/', img: '../images/cube.jpg'}]

const ProjectsApp = () => {
    return (
        <Section>
            {arrOfProjects.map(project => {
                return <Article>
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

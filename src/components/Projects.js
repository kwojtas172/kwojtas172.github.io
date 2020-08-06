import React, {useState} from 'react';
import bmiImage from "../images/bmi.png";
import soccerImage from "../images/soccer.png";
import dietImage from "../images/diet.jpg";
import shareItemsImage from "../images/share-items.png";
import todoImage from "../images/todo.png";

export default function Projects() {
    const [projects] = useState([{name: "BMI Calculator", description: "The application calculates the BMI based on the entered data (weight in kilograms and height in centimeters). In addition to the numerical value, the user gets a descriptive answer (normal weight, underweight, overweight and obesity, suitably colored: green, yellow and red). Project created in HTML / SCSS / JS / Webpack", live: "https://kwojtas172.github.io/BMI-calculator/dist/", repo: "https://github.com/kwojtas172/BMI-calculator", img: "../images/bmi.png"}, {name: "Football Scores", description: "Football Scores is an application that shows the results of football games (sorts them into live games, games ended, scheduled games). It allows you to add your favorite games (which makes it possible we can quickly check the result of the match we are interested in). Additional functionality is the ability to check the current table (they can be sorted by points, wins or goal difference) or subsequent matches. I have introduced a night mode (dimming light colors). Technologies used: JavaScript, React, Redux, HTML, SCSS (Sass), Git, API, npm.", live: "https://kwojtas172.github.io/scores-app", repo: "https://github.com/kwojtas172/scores-app", img: "../images/soccer.png"}, {name: "Plan a diet", description: "Application for managing diet plans. It allows you to modify (add, edit, delete) plans and regulations for the week of the year selected by the user. The project was made in a team of three. Technologies used: JavaScript, React (React Router), HTML, SCSS (Sass), Git, npm.", live: "https://kwojtas172.github.io/plan-a-diet", repo: "https://github.com/kwojtas172/plan-a-diet", img: "../images/diet.jpg"}, {name: "Share Items", description: "A site where you can give back unnecessary things to those in need. The ability to create an account and log in the user. Using the form, you can report the willingness to return items (select the target group, type of items to be returned, date and place of collection). Technologies used: JavaScript, React, HTML, SCSS (Sass), Git, npm, Firebase.", live: "https://kwojtas172.github.io/share-items", repo: "https://github.com/kwojtas172/share-items", img: "../images/share-items.png"}, {name: "ToDo App", description: "To Do App To Do App. You can add tasks with the title and description to the application. Tasks can be marked as finished (there is also an option to undo this change) - in the form of strikethrough text and completely removed from the list of tasks to be performed. Project made in HTML / CSS / React / JS", live: "https://kwojtas172.github.io/toDo/", repo: "https://github.com/kwojtas172/toDo", img: "../images/todo.png"}]);

    const handleNext = () => {
        const slides = document.querySelectorAll(".projects__slider__element")
        slides.forEach(slide=>{
            if(slide.classList.contains("projects__slider__element--hidden-prev")) {
                slide.classList.remove("projects__slider__element--hidden-prev");
                slide.classList.add("projects__slider__element--hidden-next")
            }
            else if(slide.classList.contains("projects__slider__element--first-active")) {
                slide.classList.remove("projects__slider__element--first-active");
                slide.classList.add("projects__slider__element--hidden-prev")
            }
            else if(slide.classList.contains("projects__slider__element--second-active")) {
                slide.classList.remove("projects__slider__element--second-active");
                slide.classList.add("projects__slider__element--first-active")
            }
            else if(slide.classList.contains("projects__slider__element--third-active")) {
                slide.classList.remove("projects__slider__element--third-active");
                slide.classList.add("projects__slider__element--second-active")
            }
            else if(slide.classList.contains("projects__slider__element--hidden-next")) {
                slide.classList.remove("projects__slider__element--hidden-next");
                slide.classList.add("projects__slider__element--third-active")
            }
        })
        
    }
    const handlePrev = () => {
        const slides = document.querySelectorAll(".projects__slider__element")
        slides.forEach(slide=>{
            if(slide.classList.contains("projects__slider__element--hidden-prev")) {
                slide.classList.remove("projects__slider__element--hidden-prev");
                slide.classList.add("projects__slider__element--first-active")
            }
            else if(slide.classList.contains("projects__slider__element--first-active")) {
                slide.classList.remove("projects__slider__element--first-active");
                slide.classList.add("projects__slider__element--second-active")
            }
            else if(slide.classList.contains("projects__slider__element--second-active")) {
                slide.classList.remove("projects__slider__element--second-active");
                slide.classList.add("projects__slider__element--third-active")
            }
            else if(slide.classList.contains("projects__slider__element--third-active")) {
                slide.classList.remove("projects__slider__element--third-active");
                slide.classList.add("projects__slider__element--hidden-next")
            }
            else if(slide.classList.contains("projects__slider__element--hidden-next")) {
                slide.classList.remove("projects__slider__element--hidden-next");
                slide.classList.add("projects__slider__element--hidden-prev")
            }
        })
    }
    
    return (
        <section className="projects" id="projects">
            <div className="projects__slider">
                {projects.map((project, idx)=>{
                    if(idx===0) {
                        return <div className="projects__slider__element projects__slider__element--hidden-prev" key={idx}>
                            <img src={bmiImage} alt={project.name} className="projects__slider__element__img" />
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="projects__slider__element__link">Live</a>
                            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="projects__slider__element__link projects__slider__element__link--second">Repository</a>
                            <p className="projects__slider__element__description">{project.description}</p>
                        </div>
                    }
                    if(idx===1) {
                        return <div className="projects__slider__element projects__slider__element--first-active" key={idx}>
                            <img src={soccerImage} alt={project.name} className="projects__slider__element__img" />
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="projects__slider__element__link">Live</a>
                            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="projects__slider__element__link projects__slider__element__link--second">Repository</a>
                            <p className="projects__slider__element__description">{project.description}</p>
                        </div>
                    }
                    if(idx===2) {
                        return <div className="projects__slider__element projects__slider__element--second-active" key={idx}>
                                <img src={dietImage} alt={project.name} className="projects__slider__element__img" />
                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="projects__slider__element__link">Live</a>
                                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="projects__slider__element__link projects__slider__element__link--second">Repository</a>
                                <p className="projects__slider__element__description">{project.description}</p>
                            </div>
                    }
                    if(idx===3) {
                        return <div className="projects__slider__element projects__slider__element--third-active" key={idx}>
                            <img src={shareItemsImage} alt={project.name} className="projects__slider__element__img" />
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="projects__slider__element__link">Live</a>
                            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="projects__slider__element__link projects__slider__element__link--second">Repository</a>
                            <p className="projects__slider__element__description">{project.description}</p>
                        </div>
                    }
                    if(idx===4) {
                        return <div className="projects__slider__element projects__slider__element--hidden-next" key={idx}>
                            <img src={todoImage} alt={project.name} className="projects__slider__element__img" />
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="projects__slider__element__link">Live</a>
                            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="projects__slider__element__link projects__slider__element__link--second">Repository</a>
                            <p className="projects__slider__element__description">{project.description}</p>
                        </div>
                    } else return null
                })}
                <button className="projects__slider__btn projects__slider__btn--prev" onClick={handlePrev}></button>
                <button className="projects__slider__btn projects__slider__btn--next" onClick={handleNext}></button>
            </div>
        </section>
    )
}

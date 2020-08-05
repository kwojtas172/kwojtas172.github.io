import React from 'react';
// import projects from "../data/projects";

export default function Projects() {
    const [projects, setProjects] = React.useState([{name: "BMI Calculator", description: "The application calculates the BMI based on the entered data (weight in kilograms and height in centimeters). In addition to the numerical value, the user gets a descriptive answer (normal weight, underweight, overweight and obesity, suitably colored: green, yellow and red). Project created in HTML / SCSS / JS / Webpack", live: "https://kwojtas172.github.io/BMI-calculator/dist/", repo: "https://github.com/kwojtas172/BMI-calculator", num: 1}, {name: "Football Scores", description: "Football Scores is an application that shows the results of football games (sorts them into live games, games ended, scheduled games). It allows you to add your favorite games (which makes it possible we can quickly check the result of the match we are interested in). Additional functionality is the ability to check the current table (they can be sorted by points, wins or goal difference) or subsequent matches. A calendar is also available, thanks to which we can choose a specific date and check whether any games are played on a given day. To facilitate the use of the application I have introduced a night mode (dimming light colors), which should make it easier to use the application at night. Technologies used: JavaScript, React, Redux, HTML, SCSS (Sass), Git, API, npm.", live: "https://kwojtas172.github.io/scores-app", repo: "https://github.com/kwojtas172/scores-app", num: 2}, {name: "Plan a diet", description: "Application for managing diet plans. It allows you to modify (add, edit, delete) plans and regulations for the week of the year selected by the user. The project was made in a team of three. Technologies used: JavaScript, React (React Router), HTML, SCSS (Sass), Git, npm.", live: "https://kwojtas172.github.io/plan-a-diet", repo: "https://github.com/kwojtas172/plan-a-diet", num: 3}, {name: "Share Items", description: "A site where you can give back unnecessary things to those in need. The ability to create an account and log in the user. Using the form, you can report the willingness to return items (select the target group, type of items to be returned, date and place of collection). Technologies used: JavaScript, React, HTML, SCSS (Sass), Git, npm, Firebase.", live: "https://kwojtas172.github.io/share-items", repo: "https://github.com/kwojtas172/share-items", num: 4}, {name: "ToDo App", description: "To Do App To Do App. You can add tasks with the title and description to the application. Tasks can be marked as finished (there is also an option to undo this change) - in the form of strikethrough text and completely removed from the list of tasks to be performed. Project made in HTML / CSS / React / JS", live: "https://kwojtas172.github.io/toDo/", repo: "https://github.com/kwojtas172/toDo", num: 5}])
    const [render, setRender] = React.useState(false);
    const [animation, setAnimation] = React.useState("");
    const handleNext = () => {
        clearAnimation();
        setAnimation("");
        const copyProjects = projects
        const element = copyProjects[0];
        copyProjects.shift();
        copyProjects.push(element);
        setProjects(copyProjects);
        setAnimation("projects__slider__element--animation-next");
        setRender(!render);
        
    }
    const handlePrev = () => {
        setAnimation("");
        const copyProjects = projects
        const element = copyProjects[copyProjects.length-1];
        copyProjects.pop();
        copyProjects.unshift(element);
        setProjects(copyProjects);
        setAnimation("projects__slider__element--animation-prev");
        setRender(!render);

    }
    const clearAnimation = () => {
        if(animation.length>0) {
            setAnimation("")
        }
        
    }
    React.useEffect(() => {
        if(animation.length > 0) {
            setTimeout(clearAnimation, 600)
        }
    })
    return (
        <section className="projects" id="projects">
            <div className="projects__slider">
                {projects.map((project, idx)=>{
                    if(idx === 0) {
                        return <div className={`projects__slider__element ${animation}`} key={idx}>{project.name}</div>
                    } else {
                        return <div className="projects__slider__element" key={idx}>{project.name}</div>
                    }
                })}
                <button className="projects__slider__btn projects__slider__btn--prev" onClick={handlePrev}></button>
                <button className="projects__slider__btn projects__slider__btn--next" onClick={handleNext}></button>
            </div>
        </section>
    )
}

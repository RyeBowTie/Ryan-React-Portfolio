import React from 'react';

const projects = ({ projects }) => {
    return (
        <div>
            <h2>Projects</h2>
            <section className = 'projects' id = 'projects'>
                {projects.map((project, index) => ( 
                    <div className= 'project' key={index}>
                        <a href={project.github}><h3>{project.name}</h3></a>
                        <a href = {project.deployed}><img src={project.img} alt='Screen Shot of Project'></img></a>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default projects 

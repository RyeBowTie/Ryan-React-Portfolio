// static with link to pdf
import React from 'react'

const Resume = ({ resume, skills }) => {
    
    return(
        <section>
            <div>
                <a href={resume} download="Ryan-O'Donohue-Resume.pdf">Resume</a>
            </div>
            <div>
                <h2>Technical Skills</h2>
                <ul>
                {skills.technical.map(skill => (
                    <li>{skill}</li>
                ))}
                </ul>
            </div>
            <div>
            <h2>Soft Skills</h2>
                <ul>
                {skills.soft.map(skill => (
                    <li>{skill}</li>
                ))}
                </ul>
            </div>
        </section>
    )
}

export default Resume;
// static with link to pdf
import React from 'react'

const Resume = (props) => {
    console.log(props)
    return(
        <a href={props.resume} download="Ryan-O'Donohue-Resume.pdf">Resume</a>
    )
}

export default Resume;
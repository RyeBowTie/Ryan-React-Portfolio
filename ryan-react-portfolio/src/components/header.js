import React from "react";

const Header = ({  handlePageChange }) => {
    return (
        <header>
            <h1>Ryan O'Donohue</h1>
            <nav>
                <a href="#about" onClick={() => handlePageChange('about')}>About Me</a>
                <a href="#projects" onClick={() => handlePageChange('projects')}>Projects</a>
                <a href="#contact" onClick={() => handlePageChange('contact')}>Contact</a>
                <a href="#resume" onClick={() => handlePageChange('resume')}>Resume</a>
            </nav>
        </header>
    )
};

export default Header;


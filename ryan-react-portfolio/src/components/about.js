// static
import React from 'react';
import picture from '../assets/profile-picture.jpg'
import '../App.css'


const about = () => {
    return (
        <div>
            <h2>About Me</h2>
            <section className="about-me" id="about-me">
                <div className="biography">  
                    <img src={picture} alt="Ryan O'Donohue."></img>
                    <p>Caring, compassionate and community oriented Web Developer. Acquired thorough and logical thinking from a  Bachelor’s Degree in Philosophy and a Certificate in Web Development. Extensive experience in customer facing roles and skilled in communication and teamwork.</p>
                </div>
            </section>
        </div>
    )
}

export default about;
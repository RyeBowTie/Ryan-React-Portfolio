import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Resume from './components/resume';

import projects from './projectInfo';
import resumePDF from './assets/ryan_odonohue_resume_2021.pdf'; 
import skills from './skillsList';

function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const renderPage = () => {
    if (currentPage === 'about') {
      return <About/>;
    } else if (currentPage === 'projects') {
      return <Projects projects={projects}/>
    } else if (currentPage === 'contact') {
      return <Contact/>
    } else if (currentPage === 'resume') {
      return <Resume resume={resumePDF} skills={skills}/>
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App">
      <Header  handlePageChange= {handlePageChange}/>
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;

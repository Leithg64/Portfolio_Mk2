import React from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Freelance from './Freelance.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import ProjectCard from './ProjectCard.jsx'

import samImage from './assets/sam.png';
import dilbertImage from './assets/dilbert.jpg';
import eddyImage from './assets/eddy.jpg';
import gregImage from './assets/greg.jpg';
import maryImage from './assets/mary.png';
import wolfImage from './assets/wolf.jpg';

function App() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      imageUrl: samImage,
      description: "This is the description for Project One.",
      links: {
        liveDemo: "https://example.com/project1",
        repo: "https://github.com/username/project1",
        moreInfo: "https://example.com/project1/info"
      }
    },
    {
      id: 2,
      title: "Project Two",
      imageUrl: dilbertImage,
      description: "This is the description for Project Two.",
      links: {
        liveDemo: "https://example.com/project2",
        repo: "https://github.com/username/project2",
        moreInfo: "https://example.com/project2/info"
      }
    },
    {
      id: 3,
      title: "Project Three",
      imageUrl: eddyImage,
      description: "This is the description for Project Three.",
      links: {
        liveDemo: "https://example.com/project2",
        repo: "https://github.com/username/project2",
        moreInfo: "https://example.com/project2/info"
      }
    },
    {
      id: 4,
      title: "Project Four",
      imageUrl: gregImage,
      description: "This is the description for Project Four.",
      links: {
        liveDemo: "https://example.com/project2",
        repo: "https://github.com/username/project2",
        moreInfo: "https://example.com/project2/info"
      }
    },
    {
      id: 5,
      title: "Project Five",
      imageUrl: maryImage,
      description: "This is the description for Project Five.",
      links: {
        liveDemo: "https://example.com/project2",
        repo: "https://github.com/username/project2",
        moreInfo: "https://example.com/project2/info"
      }
    },
    {
      id: 6,
      title: "Project Six",
      imageUrl: wolfImage,
      description: "This is the description for Project Six.",
      links: {
        liveDemo: "https://example.com/project2",
        repo: "https://github.com/username/project2",
        moreInfo: "https://example.com/project2/info"
      }
    },
    // Add more projects here
  ];
  
  
  return(
    <>
    <Header/>
    <About/>
    <ProjectCard projects={projects}/>
    <Contact/>
    <Freelance/>
    <Footer/>
    </>
  );
}

export default App

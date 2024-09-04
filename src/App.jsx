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
      title: "SeaFlix App",
      imageUrl: samImage,
      description: "This is the description for Project One.",
      links: {
        liveDemo: "https://seaflix.netlify.app/",
        repo: "https://github.com/Leithg64/MyFlix_Client-side",
        moreInfo: "#"
      }
    },
    {
      id: 2,
      title: "2D Platformer Game",
      imageUrl: dilbertImage,
      description: "This is the description for Project Two.",
      links: {
        liveDemo: "https://leithg64.github.io/2D-Platformer-Game/",
        repo: "https://github.com/Leithg64/2D-Platformer-Game",
        moreInfo: "#"
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
    <div className="card-container">
      <Header/>
      <About/>
      <ProjectCard projects={projects}/>
      <Contact/>
      <Freelance/>
      <Footer/>
    </div>
  );
}

export default App

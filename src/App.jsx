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
      description: "This is the description for Project One. Placeholder text is inserted to provide a more accurate respresentation of how much space the final paragraph might take up. These dog photos are great I like them very much. Dogs dogs dogs dogs dogs.",
      links: {
        liveDemo: "https://seaflix.netlify.app/",
        repo: "https://github.com/Leithg64/MyFlix_Client-side",
        moreInfo: "#"
      }
    },
    {
      id: 2,
      title: "The Last Shift Inn",
      imageUrl: eddyImage,
      description: "This is the description for Project One. Placeholder text is inserted to provide a more accurate respresentation of how much space the final paragraph might take up. These dog photos are great I like them very much. Dogs dogs dogs dogs dogs.",
      links: {
        liveDemo: "https://example.com/project2",
        repo: "https://github.com/username/project2",
        moreInfo: "https://example.com/project2/info"
      }
    },
    {
      id: 3,
      title: "2D Platformer Game",
      imageUrl: dilbertImage,
      description: "This is the description for Project One. Placeholder text is inserted to provide a more accurate respresentation of how much space the final paragraph might take up. These dog photos are great I like them very much. Dogs dogs dogs dogs dogs.",
      links: {
        liveDemo: "https://leithg64.github.io/2D-Platformer-Game/",
        repo: "https://github.com/Leithg64/2D-Platformer-Game",
        moreInfo: "#"
      }
    },
    {
      id: 4,
      title: "My Old Portfolio",
      imageUrl: maryImage,
      description: "This is the description for Project One. Placeholder text is inserted to provide a more accurate respresentation of how much space the final paragraph might take up. These dog photos are great I like them very much. Dogs dogs dogs dogs dogs.",
      links: {
        liveDemo: "https://leithg64.github.io/Portfolio-Website/index.html",
        repo: "https://github.com/Leithg64/Portfolio-Website",
        moreInfo: "https://example.com/project2/info"
      }
    },
    {
      id: 5,
      title: "Pokedex App",
      imageUrl: gregImage,
      description: "This is the description for Project One. Placeholder text is inserted to provide a more accurate respresentation of how much space the final paragraph might take up. These dog photos are great I like them very much. Dogs dogs dogs dogs dogs.",
      links: {
        liveDemo: "https://leithg64.github.io/Pokedex_app/",
        repo: "https://github.com/Leithg64/Pokedex_app",
        moreInfo: "#"
      }
    },
    {
      id: 6,
      title: "Chat App (IOS & Android)",
      imageUrl: wolfImage,
      description: "This is the description for Project One. Placeholder text is inserted to provide a more accurate respresentation of how much space the final paragraph might take up. These dog photos are great I like them very much. Dogs dogs dogs dogs dogs.",
      links: {
        liveDemo: "https://example.com/project2",
        repo: "https://github.com/Leithg64/Chat-App",
        moreInfo: "https://example.com/project2/info"
      }
    },
    // Add more projects here
  ];
  
  
  return(
    <>
      <Header/>
      <div className="card-container">
        <About/>
        <ProjectCard projects={projects}/>
        <Contact/>
        <Freelance/>
      </div>
      <Footer/>
    </>
    
  );
}

export default App

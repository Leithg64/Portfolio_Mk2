import React, { useState } from "react";

const ProjectCard = ({ projects }) => {
  // Initialize state to track the current project being displayed
  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <div className="project-card">
      {/* Navigation Links */}
      <div className="project-links">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setCurrentProject(project)}
            className={`project-link ${currentProject.id === project.id ? 'active' : ''}`}
          >
            {project.title}
          </button>
        ))}
      </div>

      {/* Project Display */}
      <div className="project-display">
        <img src={currentProject.imageUrl} alt={currentProject.title} style={{ width: '200px', height: 'auto' }} />
        <h1>{currentProject.title}</h1>
        <p>{currentProject.description}</p>
        
        <div className="project-extra-links">
          <a href={currentProject.links.liveDemo} target="_blank" rel="noopener noreferrer">Live Site</a>
          <a href={currentProject.links.repo} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={currentProject.links.moreInfo} target="_blank" rel="noopener noreferrer">Documentation</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import ProjectItem from "./ProjectItem";


function ProjectList({ projects }) {
  console.log(projects);

  const Myprojects = projects.map((projects) => (
    <ProjectItem 
        key={projects.id}
        name={projects.name}
        about={projects.about}
        technologies={projects.technologies}
      />
  )
  )
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{Myprojects}</div>
      
    </div>
  );
}

export default ProjectList;

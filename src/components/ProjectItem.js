import React from "react";

function ProjectItem({ name, about, technologies }) {
  const Technologylist = technologies.map((i) => (
    <span key={i}>{i}</span>
))
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        { Technologylist }
      </div>
    </div>
  );
}

export default ProjectItem;

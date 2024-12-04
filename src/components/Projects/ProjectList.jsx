import React from "react";

const ProjectList = () => {
  const projects = [
    { id: 1, title: "Project A", description: "Description of Project A" },
    { id: 2, title: "Project B", description: "Description of Project B" },
  ];

  return (
    <div>
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

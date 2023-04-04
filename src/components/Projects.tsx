import projectData from "../data/projectData";
import { ProjectType } from "../types/types";
import Project from "./Project";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      
      <h2 className="projects--title">Projects</h2>
      <div className="projects--container">
      {projectData.map((project: ProjectType) => {
        return (
          <Project
            key={project.name}
            name={project.name}
            images={project.images}
            technologies={project.technologies}
            description={project.description}
            repoLink={project.repoLink}
            liveLink={project.liveLink}
          />
        );
      })}
      </div>
    </section>
  );
};

export default Projects;

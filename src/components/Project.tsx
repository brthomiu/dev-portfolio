import { ProjectType } from "../types/types";
import Carousel from "./Carousel";
import TechCloud from "./TechCloud";

// Project functional component

const Project = (props: ProjectType) => {
  return (
    <article className="project">
      <div className="project--name-container">
        <h2 className="project--name">{props.name}</h2>
      </div>
      <Carousel images={props.images} />
      <div className="project--content">
        <p className="project--description">{props.description}</p>
        <TechCloud key={props.name} technologies={props.technologies} />
        <div className="project--links">
          <a href={props.repoLink} target="_blank" rel="noreferrer">
            <button className="project--link">GitHub</button>
          </a>

          <a href={props.liveLink} target="_blank" rel="noreferrer">
            <button className="project--link">Live Demo</button>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;

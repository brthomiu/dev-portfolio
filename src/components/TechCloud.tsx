import { TechCloudType } from "../types/types";

const TechCloud = (props: TechCloudType) => {
  if (props.technologies.length > 0) {
    return (
      <ul className="techCloud">
        {props.technologies.map((tech: string) => {
          return <li className="techCloud--item">{tech}</li>;
        })}
      </ul>
    );
  } else {
    return (
      <ul className="techCloud">
        <li className="techCloud--item">JavaScript</li>
      </ul>
    );
  }
};

export default TechCloud;

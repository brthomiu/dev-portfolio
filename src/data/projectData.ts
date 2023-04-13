import { ProjectType } from "../types/types";
import taskList1 from "../assets/taskListDbSmall.png";
import taskList2 from "../assets/taskListImageSmall.png";
import taskListGif from "../assets/taskListGifSmall.gif";
import movie1 from "../assets/movieImage1.png";
import movie2 from "../assets/movieImage2.png";
import movie3 from "../assets/movieImage3.png";
import calculon1 from "../assets/calculonImage1.png";
import calculonGif from "../assets/calculonGif.gif";
import ston1 from "../assets/newStonGif.gif";
import ston2 from "../assets/stonImageSmall2.png";
import ston3 from "../assets/mobileStonGif.gif";

const projectData: Array<ProjectType> = [
  {
    name: "Stön Recipe Notes",
    images: [ston1, ston2, ston3],
    description:
      "A platform to help cooks and chefs develop better recipes. Stön is built with React and utilizes Redux Toolkit for client-side state management. Data is housed on a MongoDB cluster, and accessed through API endpoints on a Node/Express backend.",
    technologies: [
      "TypeScript",
      "JavaScript",
      "React",
      "Redux",
      "Node",
      "MongoDB",
      "CSS",
    ],
    repoLink: "https://github.com/brthomiu/Ston-Pizza-Notes",
    liveLink: "https://recipes2023.herokuapp.com/",
  },

  {
    name: "Full Stack Task List",
    images: [taskListGif, taskList2, taskList1],
    description:
      "Full stack task list webapp using NodeJS, React, Express, and MongoDB. Uses Redux Toolkit for state management and JSON Web Tokens for authentication.",
    technologies: ["JavaScript", "React", "Redux", "Node", "MongoDB", "CSS"],
    repoLink: "https://github.com/brthomiu/Full-Stack-Task-List",
    liveLink: "https://restfulmern2022.herokuapp.com/login",
  },
  {
    name: "Movie Lookup",
    images: [movie1, movie2, movie3],
    description:
      "Movie lookup app made with React. Fetches movies from a remote API and renders component cards. Includes search and tag features.",
    technologies: ["JavaScript", "React", "CSS"],
    repoLink: "https://github.com/brthomiu/Movie-Lookup",
    liveLink: "https://brthomiu.github.io/movie-app/",
  },
  {
    name: "Calculon",
    images: [calculonGif, calculon1],
    description:
      "Earth's Greatest Calculating Unit - Made with React and JavaScript.",
    technologies: ["JavaScript", "React", "CSS"],
    repoLink: "https://github.com/brthomiu/calculon",
    liveLink: "https://brthomiu.github.io/calculon/",
  },
];

export default projectData;

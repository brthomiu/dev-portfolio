import portrait from "../assets/portraitSmall.jpg";
import { useState } from "react";
import "./styles.css";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    if (showMore == false) {
      setShowMore(true);
    } else if (showMore == true) {
      setShowMore(false);
    }
  };

  if (showMore == false) {
    return (
      <section id="about" className="about">
        <div className="about--bg">
          <main className="about--container">
            <article className="about--content">
              <h1>Hi, I'm Brad!</h1>

              <div className="about--circle">
                <img
                  className="about--portrait"
                  src={portrait}
                  alt="Portrait of Brad"
                />
              </div>
              <p id="about--body">
                Whether writing code, building applications, or designing content,
                I'm passionate about using technology to turn dreams into
                reality.
              </p>
              <a href={"#about"}>
                <button onClick={toggleShowMore}>More</button>
              </a>
            </article>
          </main>
        </div>
      </section>
    );
  } else {
    return (
      <section id="about" className="about">
        <div className="about--bg">
          <main className="about--container">
            <article className="about--content">
              <h1>Hi, I'm Brad!</h1>

              <div className="about--circle">
                <img
                  className="about--portrait"
                  src={portrait}
                  alt="Portrait of Brad"
                />
              </div>
              <p id="about--body">
                All it took was one click of the Windows-95 Start Menu and I was
                hooked.<br></br>
                <br></br>What started as scrawling and screaming with MS-Paint
                and Sound Recorder would eventually lead me to explore software
                like Photoshop, After Effects, and FL-Studio, and blossom into a
                lifelong passion for technology.<br></br>
                <br></br>
                In 2020, I endeavored to take my passion further, and plunged
                into the world of computer science, programming languages, and
                software development.
                <br></br>
                <br></br>My primary focus is full-stack web development with
                JavaScript, TypeScript, React, and Node, but I've also dabbled 
                with Python and Java, and played with other
                frameworks like Vue and Svelte.
                <br></br> <br></br>
                My journey so far has spanned thousands of hours, hundreds of
                git commits, and dozens of online courses, and I'm excited to see
                where it takes me!
              </p>
              <a onClick={toggleShowMore} href={"#about--body"}>
                <button>Less</button>
              </a>
            </article>
          </main>
        </div>
      </section>
    );
  }
};

export default About;

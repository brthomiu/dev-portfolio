import { RiMailFill } from "react-icons/ri";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>

      <div className="contact--options">
        <article className="contact--option">
          <RiMailFill className="contact--option-icon" />
          <h4>Email</h4>
          <a href="mailto:brthomiu@gmail.com">
            <button className="contact--button">brthomiu@gmail.com</button>
          </a>
        </article>

        <article className="contact--option">
          <BsLinkedin className="contact--option-icon" />
          <h4>LinkedIn</h4>
          <a
            href="https://www.linkedin.com/in/brthomiu/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="contact--button">
              linkedin.com/in/brthomiu
            </button>
          </a>
        </article>

        <article className="contact--option">
          <BsGithub className="contact--option-icon" />
          <h4>GitHub</h4>
          <a
            href="https://github.com/brthomiu"
            target="_blank"
            rel="noreferrer"
          >
            <button className="contact--button">
              github.com/brthomiu
            </button>
          </a>
        </article>
      </div>
    </section>
  );
};

export default Contact;

import "./About.scss";
import SkillsSec from "../../Components/Home/Skills_Section/SkillsSec";
import ExperienceSec from "../../Components/Home/Experience_Section/ExperienceSec";

export const About = () => {
  return (
    <>
      <section className="AboutPage">
        <div className="sectionContainer">
          <div className="aboutPageHeading">
            <h1>Hi Again, I'm Sourav.</h1>
          </div>
          <div className="aboutPageContent">
            <p>
              {" "}
              I'm a <span>FullStack Web Developer</span> and passionate about
              web development. I'm on a journey to transform my passion into a
              fulfilling career. I'm currently pursuing my <span>BCA</span>{" "}
              (Bachelor of Computer Applications) in the bustling city of New
              Delhi. My academic journey has provided me with a strong
              theoretical understanding of computer science, which I actively
              apply to my web development projects.
            </p>
            <br />
            <p>
              What sets me apart is my eagerness to learn and adapt. Web
              development is a field that constantly evolves, and I'm committed
              to staying up-to-date with the latest technologies and trends.
              This ensures that I can deliver cutting-edge solutions to my
              clients and create seamless user experiences.
            </p>
            <br />
            <p>
              One of the aspects of web development that I truly enjoy is the
              freedom it provides. It's not just a job for me; it's a passion.
              This passion motivates me to continuously improve my skills and
              create beautiful, functional websites. I love the process of
              turning ideas into code and watching them come to life on the
              screen.
            </p>
            <br />
            <p>
              I'm not just a developer; I'm a problem solver. I thrive on
              challenges and am always eager to tackle new projects. Whether
              it's a personal website, an e-commerce platform, or a complex web
              application, I'm up for the challenge.
            </p>
            <br />
            <p>
              As a <span>freelancer</span>, I'm open to collaborations and new
              opportunities. If you have a project in mind or need a developer
              to bring your ideas to life, feel free to get in touch. I'm ready
              to contribute my skills and enthusiasm to help you achieve your
              goals.
            </p>
            <br />
            <p>
              Thank you for visiting my portfolio website. Feel free to explore
              my work and get in touch if you'd like to discuss potential
              projects or collaborations. I'm excited to be a part of the
              ever-evolving world of web development, and I look forward to what
              the future holds. <br />
              <br />
              <span>Let's code together!</span>
            </p>
            <br />
          </div>
          <div className="resumeSection">
            For more details, feel free to grab a copy of my resume by clicking
            the link here:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              download={true}
              className={`resume-btn aboutResume`}
              href="/assets/Resume.pdf"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
      <ExperienceSec />
      <SkillsSec />
    </>
  );
};

export default About;

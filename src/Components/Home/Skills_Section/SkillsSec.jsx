import React from "react";
import "./SkillsSec.scss";
// import { LazyLoadImage } from "react-lazy-load-image-component";

const SkillsSec = (props) => {
  const frontendSkills = [
    {
      name: "Next JS",
      icon: "/assets/svgs/next.svg",
    },
    {
      name: "React JS",
      icon: "/assets/svgs/react.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "/assets/svgs/tailwind.svg",
    },
    {
      name: "Vite",
      icon: "/assets/svgs/vite.svg",
    },
    {
      name: "Sass",
      icon: "/assets/svgs/sass.svg",
    },
    {
      name: "Javascript",
      icon: "/assets/svgs/javascript.svg",
    },
    {
      name: "CSS",
      icon: "/assets/svgs/css.svg",
    },
    {
      name: "HTML",
      icon: "/assets/svgs/html.svg",
    },
  ];
  const backendSkills = [
    {
      name: "Node JS",
      icon: "/assets/svgs/node.svg",
    },
    {
      name: "Express JS",
      icon: "/assets/svgs/express.svg",
    },
    {
      name: "Mongo DB",
      icon: "/assets/svgs/mongodb.svg",
    },
    {
      name: "Firebase",
      icon: "/assets/svgs/firebase.svg",
    },
  ];
  const otherSkills = [
    {
      name: "Git",
      icon: "/assets/svgs/git.svg",
    },
    {
      name: "Github",
      icon: "/assets/svgs/github.svg",
    },
    {
      name: "Postman",
      icon: "/assets/svgs/postman.svg",
    },
    {
      name: "Python",
      icon: "/assets/svgs/python.svg",
    },
    {
      name: "Java",
      icon: "/assets/svgs/java.svg",
    },
    {
      name: "C",
      icon: "/assets/svgs/c.svg",
    },
    {
      name: "C++",
      icon: "/assets/svgs/c++.svg",
    },
  ];
  return (
    <section
      className="Skills"
      style={{ background: props.bgColor && props.bgColor }}
    >
      <div className="sectionContainer">
        <div data-aos="fade-right" className="Section-Heading">
          <h2 className={`heading skillsHeading`}>Skills</h2>
        </div>
        <div className="flex justify-center items-center gap-8 lg:gap-16 flex-wrap mt-10">
          <div
            data-aos="fade-right"
            className="border-2 border-[#FF014F] rounded-lg p-5 w-96 h-72"
          >
            <h3 className="text-3xl text-center text-[#c9c8c8] pb-6">
              Frontend
            </h3>
            <div className="flex gap-3 flex-wrap justify-center">
              {frontendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="skill flex gap-2 items-center border border-[#c9c8c8] p-2 rounded-lg"
                >
                  <img src={skill.icon} alt={skill.name} className="h-5 w-5" />
                  <p className="text-[#878e99]">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="border-2 border-[#FF014F] rounded-lg p-5 w-96 h-72"
          >
            <h3 className="text-3xl text-center text-[#c9c8c8] pb-6">
              Backend
            </h3>
            <div className="flex gap-3 flex-wrap justify-center">
              {backendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="skill flex gap-2 items-center border border-[#c9c8c8] p-2 rounded-lg"
                >
                  <img src={skill.icon} alt={skill.name} className="h-5 w-5" />
                  <p className="text-[#878e99]">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="600"
            className="border-2 border-[#FF014F] rounded-lg p-5 w-96 h-72"
          >
            <h3 className="text-3xl text-center text-[#c9c8c8] pb-6">Other</h3>
            <div className="flex gap-3 flex-wrap justify-center">
              {otherSkills.map((skill, index) => (
                <div
                  key={index}
                  className="skill flex gap-2 items-center border border-[#c9c8c8] p-2 rounded-lg"
                >
                  <img src={skill.icon} alt={skill.name} className="h-5 w-5" />
                  <p className="text-[#878e99]">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSec;

import React from "react";
import "./SkillsSec.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SkillsSec = (props) => {
  return (
    <section
      className="Skills"
      style={{ background: props.bgColor && props.bgColor }}
    >
      <div className="sectionContainer">
        <div data-aos="fade-right" className="Section-Heading">
          <h2 className={`heading skillsHeading`}>Skills</h2>
        </div>
        <div className="skills-container">
          <div data-aos="zoom-in" className={`skills-image-container`}>
            <LazyLoadImage
              src="/assets/skills/ideogram(3).png"
              alt="Skills Section Background"
            />
          </div>
          <div className="skills-content">
            <div className="main-skills-container">
              <div data-aos="fade-right" className={`main-skills-title`}>
                <span className="openTag">{`<`}</span>
                <span className="skills-title">Main</span>
                <span className="bar">{`/`}</span>
                <span className="closeTag">{`>`}</span>
                <span className="arrow">{` =>`}</span>
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="500"
                className={`main-skills-content`}
              >
                <div className="slider2">
                  <div className="skill-content">
                    <LazyLoadImage
                      src="/assets/skills/React-icon.png"
                      alt="React Js"
                    />
                    <div className="skill-title">React Js</div>
                  </div>
                  <div className="skill-content">
                    <LazyLoadImage
                      src="/assets/skills/vitejs-icon.png"
                      alt="Vite Js"
                    />
                    <div className="skill-title">Vite Js</div>
                  </div>
                  <div className="skill-content">
                    <LazyLoadImage
                      src="/assets/skills/tailwindCSS-icon.png"
                      alt="Tailwind CSS"
                    />
                    <div className="skill-title">Tailwind CSS</div>
                  </div>
                  <div className="skill-content">
                    <LazyLoadImage
                      src="/assets/skills/js2-icon.png"
                      alt="JavaScript"
                    />
                    <div className="skill-title">JavaScript</div>
                  </div>
                  <div className="skill-content">
                    <LazyLoadImage
                      src="/assets/skills/html-icon.png"
                      alt="HTML"
                    />
                    <div className="skill-title">HTML</div>
                  </div>
                  <div className="skill-content">
                    <LazyLoadImage
                      src="/assets/skills/CSS-icon.png"
                      alt="CSS"
                    />
                    <div className="skill-title">CSS</div>
                  </div>
                  <div className="skill-content">
                    <LazyLoadImage
                      src="/assets/skills/firebase-icon.png"
                      alt="Firebase"
                    />
                    <div className="skill-title">Firebase</div>
                  </div>
                  <div className="skill-content">
                    <LazyLoadImage
                      src="/assets/skills/sass-icon.png"
                      alt="SASS"
                    />
                    <div className="skill-title">SASS</div>
                  </div>
                  <div className="skill-content">
                    <LazyLoadImage
                      src="/assets/skills/React-icon.png"
                      alt="React Js"
                    />
                    <div className="skill-title">React Js</div>
                  </div>
                  <div className="skill-content">
                    <LazyLoadImage
                      src="/assets/skills/vitejs-icon.png"
                      alt="Vite Js"
                    />
                    <div className="skill-title">Vite Js</div>
                  </div>
                  <div className="skill-content">
                    <LazyLoadImage
                      src="/assets/skills/tailwindCSS-icon.png"
                      alt="Tailwind CSS"
                    />
                    <div className="skill-title">Tailwind CSS</div>
                  </div>
                  <div className="skill-content">
                    <LazyLoadImage
                      src="/assets/skills/js2-icon.png"
                      alt="JavaScript"
                    />
                    <div className="skill-title">JavaScript</div>
                  </div>
                  <div className="skill-content">
                    <LazyLoadImage
                      src="/assets/skills/html-icon.png"
                      alt="HTML"
                    />
                    <div className="skill-title">HTML</div>
                  </div>
                  <div className="skill-content">
                    <LazyLoadImage
                      src="/assets/skills/CSS-icon.png"
                      alt="CSS"
                    />
                    <div className="skill-title">CSS</div>
                  </div>
                  <div className="skill-content">
                    <LazyLoadImage
                      src="/assets/skills/firebase-icon.png"
                      alt="Firebase"
                    />
                    <div className="skill-title">Firebase</div>
                  </div>
                  <div className="skill-content">
                    <LazyLoadImage
                      src="/assets/skills/sass-icon.png"
                      alt="SASS"
                    />
                    <div className="skill-title">SASS</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="familiar-skills-container">
              <div data-aos="fade-right" className={`familiar-skills-title`}>
                <span className="openTag">{`<`}</span>
                <span className="skills-title">Familiar</span>
                <span className="bar">{`/`}</span>
                <span className="closeTag">{`>`}</span>
                <span className="arrow">{` =>`}</span>
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="500"
                className={`familiar-skills-content`}
              >
                <div className="skill-content">
                  <LazyLoadImage
                    src="/assets/skills/python-icon.png"
                    alt="Python"
                  />
                  <div className="skill-title">Python</div>
                </div>
                <div className="skill-content">
                  <LazyLoadImage
                    src="/assets/skills/java-icon.png"
                    alt="Java"
                  />
                  <div className="skill-title">Java</div>
                </div>
                <div className="skill-content">
                  <LazyLoadImage src="/assets/skills/c-icon.png" alt="C" />
                  <div className="skill-title">C</div>
                </div>
                <div className="skill-content">
                  <LazyLoadImage src="/assets/skills/c++-icon.png" alt="C++" />
                  <div className="skill-title">C++</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSec;

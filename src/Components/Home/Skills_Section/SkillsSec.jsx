import './SkillsSec.scss'
import { useEffect, useRef } from 'react'

const SkillsSec = (props) => {

    // const sliderRef = useRef(null);
    // useEffect(() => {
    //     const slider = sliderRef.current;
    //     let isMouseOverSlider = false;

    //     const cloneChildren = () => {
    //         const children = Array.from(slider.children);
    //         children.forEach((child) => {
    //             slider.appendChild(child.cloneNode(true));
    //         });
    //     };

    //     const scrollWithRAF = () => {
    //         if (slider && isMouseOverSlider) {
    //             const scrollAmount = 0;
    //             const targetScroll = slider.scrollLeft + scrollAmount;

    //             slider.scrollLeft += (targetScroll - slider.scrollLeft) * 0.1;

    //             if (slider.scrollLeft >= slider.scrollWidth / 2) {
    //                 slider.scrollLeft = 0;
    //             }
    //         }
    //         requestAnimationFrame(scrollWithRAF);
    //     };

    //     const scrollWithInterval = () => {
    //         if (slider && !isMouseOverSlider) {
    //             slider.style.transition = 'none';
    //             slider.scrollLeft += 2;

    //             if (slider.scrollLeft - 20 >= slider.scrollWidth / 2) {
    //                 slider.scrollLeft = 0;
    //                 setTimeout(() => {
    //                     slider.style.transition = 'scroll 0.5s linear';
    //                 }, 30);
    //             } else {
    //                 slider.style.transition = 'scroll 0.5s linear';
    //             }
    //         }
    //     };

    //     slider.addEventListener('mouseenter', () => {
    //         isMouseOverSlider = true;
    //         requestAnimationFrame(scrollWithRAF);
    //     });

    //     slider.addEventListener('mouseleave', () => {
    //         isMouseOverSlider = false;
    //         clearInterval(intervalId);
    //         intervalId = setInterval(scrollWithInterval, 30);
    //     });

    //     cloneChildren();
    //     let intervalId = setInterval(scrollWithInterval, 30);

    //     return () => {
    //         clearInterval(intervalId);
    //         slider.removeEventListener('mouseenter', () => {
    //             isMouseOverSlider = true;
    //             requestAnimationFrame(scrollWithRAF);
    //         });
    //         slider.removeEventListener('mouseleave', () => {
    //             isMouseOverSlider = false;
    //             clearInterval(intervalId);
    //             intervalId = setInterval(scrollWithInterval, 30);
    //         });
    //     };
    // }, []);

    return (
        <section className='Skills' style={{ background: props.bgColor && props.bgColor }} >
            <div className="sectionContainer">
                <div data-aos="fade-right" className="Section-Heading">
                    <h2 className={`heading skillsHeading`}>Skills</h2>
                </div>
                <div className="skills-container">
                    <div data-aos="zoom-in" className={`skills-image-container`}>
                        <img src="/assets/skills/ideogram(3).png" alt="skills" />
                    </div>
                    <div className="skills-content">
                        <div className="main-skills-container">
                            <div data-aos="fade-right" className={`main-skills-title`}>
                                <span className='openTag'>{`<`}</span><span className='skills-title'>Main</span><span className='bar'>{`/`}</span><span className='closeTag'>{`>`}</span><span className='arrow'>{` =>`}</span>
                            </div>
                            <div data-aos="fade-right" data-aos-delay="500" className={`main-skills-content`}>
                                <div className="slider2">
                                    <div className="skill-content">
                                        <img src="/assets/skills/React-icon.png" alt="" />
                                        <div className="skill-title">React Js</div>
                                    </div>
                                    <div className="skill-content">
                                        <img src="/assets/skills/vitejs-icon.png" alt="" />
                                        <div className="skill-title">Vite Js</div>
                                    </div>
                                    <div className="skill-content">
                                        <img src="/assets/skills/js2-icon.png" alt="" />
                                        <div className="skill-title">JavaScript</div>
                                    </div>
                                    <div className="skill-content">
                                        <img src="/assets/skills/html-icon.png" alt="" />
                                        <div className="skill-title">HTML</div>
                                    </div>
                                    <div className="skill-content">
                                        <img src="/assets/skills/CSS-icon.png" alt="" />
                                        <div className="skill-title">CSS</div>
                                    </div>
                                    <div className="skill-content">
                                        <img src="/assets/skills/firebase-icon.png" alt="" />
                                        <div className="skill-title">Firebase</div>
                                    </div>
                                    <div className="skill-content">
                                        <img src="/assets/skills/sass-icon.png" alt="" />
                                        <div className="skill-title">SASS</div>
                                    </div>
                                    <div className="skill-content">
                                        <img src="/assets/skills/React-icon.png" alt="" />
                                        <div className="skill-title">React Js</div>
                                    </div>
                                    <div className="skill-content">
                                        <img src="/assets/skills/vitejs-icon.png" alt="" />
                                        <div className="skill-title">Vite Js</div>
                                    </div>
                                    <div className="skill-content">
                                        <img src="/assets/skills/js2-icon.png" alt="" />
                                        <div className="skill-title">JavaScript</div>
                                    </div>
                                    <div className="skill-content">
                                        <img src="/assets/skills/html-icon.png" alt="" />
                                        <div className="skill-title">HTML</div>
                                    </div>
                                    <div className="skill-content">
                                        <img src="/assets/skills/CSS-icon.png" alt="" />
                                        <div className="skill-title">CSS</div>
                                    </div>
                                    <div className="skill-content">
                                        <img src="/assets/skills/firebase-icon.png" alt="" />
                                        <div className="skill-title">Firebase</div>
                                    </div>
                                    <div className="skill-content">
                                        <img src="/assets/skills/sass-icon.png" alt="" />
                                        <div className="skill-title">SASS</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="familiar-skills-container">
                            <div data-aos="fade-right" className={`familiar-skills-title`}>
                                <span className='openTag'>{`<`}</span><span className='skills-title'>Familiar</span><span className='bar'>{`/`}</span><span className='closeTag'>{`>`}</span><span className='arrow'>{` =>`}</span>
                            </div>
                            <div data-aos="fade-right" data-aos-delay="500" className={`familiar-skills-content`}>
                                <div className="skill-content">
                                    <img src="/assets/skills/python-icon.png" alt="" />
                                    <div className="skill-title">Python</div>
                                </div>
                                <div className="skill-content">
                                    <img src="/assets/skills/java-icon.png" alt="" />
                                    <div className="skill-title">Java</div>
                                </div>
                                <div className="skill-content">
                                    <img src="/assets/skills/c-icon.png" alt="" />
                                    <div className="skill-title">C</div>
                                </div>
                                <div className="skill-content">
                                    <img src="/assets/skills/c++-icon.png" alt="" />
                                    <div className="skill-title">C++</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsSec
import './AboutSec.scss'

import { FaMedal } from 'react-icons/fa'
import { FaUserGraduate } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'

import { useState, useContext, useEffect } from 'react'
import { AppContext } from '../../../App'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const AboutSec = (props) => {
    const { innerMouseRef, outerMouseRef } = useContext(AppContext)
    const [arrowTransition, setArrowTransition] = useState(false)
    const [arrowAnimation, setArrowAnimation] = useState(false)
    const aboutImg = document.querySelector('.aboutImage img')
    const handleImageMouseEnter = () => {
        setArrowTransition(true);
        setArrowAnimation(false);
        aboutImg.style.filter = 'grayscale(100%)';
        outerMouseRef.current.classList.add('about-redirect-outer')
        innerMouseRef.current.classList.add('about-redirect-inner')
        outerMouseRef.current.style.transition = 'none'
        innerMouseRef.current.innerHTML = "+"
        outerMouseRef.current.innerHTML = "More About Me"
    }
    const handleImageMouseLeave = () => {
        setArrowAnimation(true);
        setArrowTransition(false);
        aboutImg.style.filter = 'grayscale(0%)'
        outerMouseRef.current.classList.remove('about-redirect-outer')
        innerMouseRef.current.classList.remove('about-redirect-inner')
        setTimeout(() => {
            outerMouseRef.current.style.transition = 'all 0.7s ease';
        }, 500);
        innerMouseRef.current.innerHTML = ""
        outerMouseRef.current.innerHTML = ""
    }

    // const handlePageRedirectMouseEnter = () => {
    //     setArrowAnimation(false);
    //     setArrowTransition(true);
    //     aboutImg.style.filter = 'grayscale(100%)';
    //     outerMouseRef.current.classList.add('about-redirect-outer')
    //     innerMouseRef.current.classList.add('about-redirect-inner')
    //     outerMouseRef.current.style.transition = 'none'
    //     innerMouseRef.current.innerHTML = "+"
    //     outerMouseRef.current.innerHTML = "More About Me"
    // }

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger)
    //     gsap.from('.aboutImage', {
    //         opacity: 0,
    //         duration: 0.5,
    //         x: 500,
    //         scrollTrigger: {
    //             trigger: '.aboutImage',
    //             start: 'top 80%',
    //             toggleActions: 'restart none none reverse',
    //         }
    //     })
    //     gsap.from('.boxContent:nth-child(1)', {
    //         opacity: 0,
    //         duration: 0.1,
    //         x: -500,
    //         yoyo: true,
    //         scrollTrigger: {
    //             trigger: '.boxContent:nth-child(1)',
    //             start: 'top 90%',
    //             toggleActions: 'restart none none reverse',
    //         },
    //     })
    //     gsap.from('.boxContent:nth-child(2)', {
    //         opacity: 0,
    //         duration: 0.1,
    //         x: -500,
    //         yoyo: true,
    //         delay: 0.3,
    //         scrollTrigger: {
    //             trigger: '.boxContent:nth-child(2)',
    //             start: 'top 90%',
    //             toggleActions: 'restart none none reverse',
    //         },
    //     })
    //     gsap.from('.aboutText', {
    //         opacity: 0,
    //         duration: 0.4,
    //         x: -500,
    //         yoyo: true,
    //         scrollTrigger: {
    //             trigger: '.aboutText',
    //             start: 'top 80%',
    //             toggleActions: 'restart none none reverse',
    //         },
    //     })
    // }, [])

    return (
        <section className='About'>
            <div className="sectionContainer">
                <div data-aos="fade-right" className="Section-Heading ">
                    <h2 className={`heading`}>About Me</h2>
                </div>
                <div className="aboutContainer">
                    <div className="aboutDetails">
                        <div className="aboutBoxContainer">
                            <div data-aos="fade-right" className={`boxContent`}>
                                <div className="icon"><FaMedal /></div>
                                <div className="boxTitle">Experience</div>
                                <div className="time">9+ Months</div>
                                <div className="discription">Frontend Development</div>
                            </div>
                            <div data-aos="fade-right" data-aos-delay="500" className={`boxContent`}>
                                <div className="icon"><FaUserGraduate /></div>
                                <div className="boxTitle">Education</div>
                                <div className="time">B.C.A. (Pursuing)</div>
                                <div className="discription">M.C.A. (Soon)</div>
                            </div>
                        </div>
                        <div data-aos="fade-right" className={`aboutText`}>
                            <p>Hello! I'm Sourav Goyal, a passionate Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and React JS. I thrive on transforming creative ideas into stunning, user-friendly web experiences. Currently pursuing my BCA, I am based in the vibrant city of New Delhi. </p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className={`aboutImage`}>
                        <div onMouseEnter={() => handleImageMouseEnter()} className={`aboutPageRedirect ${arrowTransition ? 'arrowTransition' : ''} ${arrowAnimation ? 'arrowAnimation' : ''}`}>
                            <a onClick={() => {
                                handleImageMouseLeave();
                                props.pageAnimation('About', 'about');
                            }} href="#"><BsArrowRight /></a>
                        </div>
                        <img
                            onClick={() => {
                                handleImageMouseLeave();
                                props.pageAnimation('About', 'about');
                            }}
                            onMouseEnter={() => handleImageMouseEnter()}
                            onMouseLeave={() => handleImageMouseLeave()}
                            src="./assets/about1.jpg"
                            alt=""
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSec

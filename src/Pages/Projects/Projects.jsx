import React, { useState, useRef } from 'react';
import { MdArrowOutward } from "react-icons/md";

import './Projects.scss';
import ProjectInfo from './ProjectInfo/ProjectInfo';

export const Projects = () => {
    const [selectedProject, SetSelectedProject] = useState({})
    const [showModal, setShowModal] = useState(false)
    const projects = [
        {
            img: '/assets/projects/project1.png',
            name: 'Resume Builder',
            description: "The Awesome Resume Builder is designed to streamline the process of resume creation.",
            githubLink: 'https://github.com/Sourav-Goyal19/Resume-Builder#visit-my-website',
            liveLink: 'https://resume-builder-reactjs.vercel.app',
            type: 'Application',
        },
        {
            img: '/assets/projects/project2.png',
            name: 'Project Manager',
            description: "The website allows users to create, edit, and delete projects. The website is designed to be simple and easy to use, with a clean and modern interface. ",
            githubLink: 'https://github.com/Sourav-Goyal19/Project-Manager',
            liveLink: 'https://project-manager-ruby.vercel.app',
            type: 'Application',
        },
        {
            img: '/assets/projects/project6.png',
            name: 'Kanban Board',
            description: 'A Kanban board is a project management tool that helps visualize and organize tasks in a workflow.',
            githubLink: 'https://github.com/Sourav-Goyal19/Kanban-Board',
            liveLink: 'https://project-10-kanban-board.vercel.app',
            type: 'Application',
        },
        {
            img: '/assets/projects/project3.png',
            name: 'Calculator',
            description: "The calculator is a simple web application that allows users to perform mathematical operations.",
            githubLink: 'https://github.com/Sourav-Goyal19/Calculator',
            liveLink: 'https://project-8-kappa.vercel.app',
            type: 'Application',
        },
        {
            img: '/assets/projects/project4.png',
            name: 'Practice Portfolio',
            description: "This is my first practice portfolio website. It is a simple portfolio website that I built using HTML, CSS AND JAVASCRIPT",
            githubLink: '',
            liveLink: 'https://responsivefirst.netlify.app/',
            type: 'Development',
        },
        {
            img: '/assets/projects/project5.png',
            name: 'Notes App',
            description: "This is a simple notes app that allows users to create, edit, and delete notes. The notes app is designed to be simple and easy to use.",
            githubLink: 'https://github.com/Sourav-Goyal19/Notes',
            liveLink: 'https://notes-one-sigma.vercel.app',
            type: 'Application',
        },
        {
            img: '/assets/projects/project7.png',
            name: 'Expense Tracker',
            description: "This is a simple expense tracker app that allows users to create, edit, and delete expenses. The expense tracker app is designed to be simple and easy to use.",
            githubLink: '',
            liveLink: 'https://my-tracker-of-expense.netlify.app',
            type: 'Application',
        },
        {
            img: '/assets/projects/project8.png',
            name: 'Weather App',
            description: 'Get real-time weather updates: Accurate forecasts, current conditions, and more. Plan your day with our easy-to-use weather website.',
            githubLink: '',
            liveLink: 'https://myfirstweather.netlify.app',
            type: 'Development',
        },
    ];

    const handleModalOpen = (project) => {
        SetSelectedProject(project)
        setShowModal(true)
    }

    const handleMouseEnter = (imgRef) => {
        const imageContainer = imgRef.current;
        const img = imageContainer.querySelector('img');

        if (imageContainer && img) {
            const containerHeight = imageContainer.clientHeight;
            const imgHeight = img.clientHeight;
            const translateYValue = (imgHeight - containerHeight) * -1;
            img.style.transform = `translateY(${translateYValue}px)`;
        }
    };

    const handleMouseLeave = (imgRef) => {
        const imageContainer = imgRef.current;
        const img = imageContainer.querySelector('img');

        if (img) {
            img.style.transform = 'translateY(0)'; // Reset the transform
        }
    };

    return (
        <section className='Projects'>
            <div className="sectionContainer">
                <div className="Section-Heading">
                    <h2 className={`heading projectsHeading`}>Projects</h2>
                </div>
                <div className="projectsContainer">
                    {projects.length > 0 && projects.map((project, index) => {
                        const imageContainerRef = useRef();
                        return (
                            <div onClick={() => handleModalOpen(project)} target='_blank' className='Project-Card' key={index}>
                                <div
                                    className='Project-Card-Image'
                                    ref={imageContainerRef}
                                >
                                    <img src={project.img} alt="" />
                                </div>
                                <div className="project-type">{project.type}</div>
                                <div className="project-heading">
                                    {project.name} <MdArrowOutward />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {showModal &&
                <ProjectInfo project={selectedProject} onClose={() => setShowModal(false)} />
            }
        </section>
    );
}

import React from 'react'
import './ProjectInfo.scss'
import Modal from '../../../Components/Modal/Modal'
import { BsGithub } from 'react-icons/bs'

const ProjectInfo = (props) => {
    return (
        <Modal onClose={props.onClose} >
            <div className='projectInfoContainer'>
                <div className="projectModalContent">
                    <div className="projectModalLogo">
                        <img src={props.project.img} alt="" />
                    </div>
                    <div className="projectModalText">
                        <div className="projectModalType">
                            Featured - {props.project.type}
                        </div>
                        <div className="projectModalHeading">
                            {props.project.name}
                        </div>
                        <div className="projectModalDescription">
                            {props.project.description}
                        </div>
                        <div className="projectModalLinks">
                            <a href={props.project.githubLink} target="_blank">Github <BsGithub size={25} /></a>
                            <a href={props.project.liveLink} target="_blank">View Project {' ->'} </a>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>

    )
}

export default ProjectInfo
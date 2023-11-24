import './Footer.scss'

import { BsGithub, BsInstagram, BsArrowUpShort } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'

export const Footer = (props) => {
    return (
        <footer className={`footer`}>
            <div className="footerContent">
                <div className="footerHeading">Sourav</div>
                <div className="pagesLinks">
                    <a href="#" onClick={() => { props.pageAnimation('Home', '') }}>Home</a>
                    <a href="#" onClick={() => { props.pageAnimation('About', 'about') }}>About</a>
                    <a href="#" onClick={() => { props.pageAnimation('Projects', 'projects') }}>Projects</a>
                    <a href="#" onClick={() => { props.pageAnimation('Contact', 'contact') }}>Contact</a>
                </div>
                <div className="social">
                    <a href="https://github.com/Sourav-Goyal19" target="_blank" aria-label="GitHub"><BsGithub /></a>
                    <a href="https://www.linkedin.com/in/sourav-goyal-0555a51b4/" target="_blank" aria-label="LinkedIn"><AiFillLinkedin /></a>
                    <a href="https://www.instagram.com/goyalsourav8893/" target="_blank" aria-label="Instagram"><BsInstagram /></a>
                </div>
                <div className="copyright">
                    © Copyright {new Date().getFullYear()}. All rights reserved.
                </div>

                <div className="homeSectionLink">
                    <div onClick={() => { window.scrollTo(0, 0); }}><BsArrowUpShort /></div>
                </div>
            </div>
        </footer>
    )
}

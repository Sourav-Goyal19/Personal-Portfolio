import './Contact.scss'

import { BiMailSend } from 'react-icons/bi'
import { FaWhatsapp } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import ContactForm from '../../Components/ContactForm/ContactForm'

export const Contact = () => {
    return (
        <section className='Contact'>
            <div className="sectionContainer">
                <div className="Section-Heading">
                    <h2 className={`heading contactHeading`}>Contact</h2>
                </div>
                <div className="contactContent">
                    <div className="TTM">
                        <div className="contactSecondHeading">Talk To Me</div>
                        <a href='mailto:goyalsourav935@gmail.com' className="socialBox">
                            <div className="socialIcon"><BiMailSend /></div>
                            <div className="socialDetails">
                                <p>Email</p>
                                <p>goyalsourav935@gmail.com</p>
                            </div>
                            <div className="redirectLink">Write Me</div>
                        </a>
                        <a href='https://wa.link/kfobyi' target='_blank' className="socialBox">
                            <div className="socialIcon"><FaWhatsapp /></div>
                            <div className="socialDetails">
                                <p>Whatsapp</p>
                                <p>+91-88882093166</p>
                            </div>
                            <div className="redirectLink">Write Me </div>
                        </a>
                        <a href='https://www.linkedin.com/in/sourav-goyal-0555a51b4/' target='_blank' className="socialBox">
                            <div className="socialIcon"><GrLinkedin /></div>
                            <div className="socialDetails">
                                <p>LinkedIn</p>
                                <p>Sourav Goyal</p>
                            </div>
                            <div className="redirectLink">Write Me</div>
                        </a>
                    </div>
                    <div className="contactFormContainer">
                        <div className="contactSecondHeading">Write Me Your Project</div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact

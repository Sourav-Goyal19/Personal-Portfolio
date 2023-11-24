import './ExperienceSec.scss'

const ExperienceSec = (props) => {
    const experience = [
        {
            heading: 'Radionics',
            duration: '07/23 - 09/23',
            summary: 'During my two-month tenure as a web developer, I dedicated my efforts to impactful projects, including Astropeoples. I specialized in crafting responsive designs, ensuring optimal user experiences through my work on various interfaces.',
            logo: './assets/experiences/experience1.jpeg'
        },
        {
            heading: 'Radionics',
            duration: '07/23 - 09/23',
            summary: 'During my two-month tenure as a web developer, I dedicated my efforts to impactful projects, including Astropeoples. I specialized in crafting responsive designs, ensuring optimal user experiences through my work on various interfaces.',
            logo: './assets/experiences/experience1.jpeg'
        },
    ]
    return (
        <section className='Experience' style={{ background: props.bgColor && props.bgColor }} >
            <div className="sectionContainer">
                <div data-aos="fade-right" className="Section-Heading">
                    <h2 className='heading experienceHeading'>Experience</h2>
                </div>
                <div className="Experience-Container mt-[35px] max-w-[1200px] relative">
                    {/* <div className="dot-container">
                        <div data-aos="fade-down" className="starting-dot"></div>
                    </div> */}
                    {experience.map((item, index) => {
                        return (
                            index % 2 == 0 ?
                                <div key={index} className="Experience-Content left-content sm:w-1/2 relative pt-3 sm:right-0 w-full">
                                    <div data-aos="fade-right" className="experience-card relative h-[200px] overflow-y-auto bg-slate-200 px-5 pt-5 rounded-2xl">
                                        <h3 className="experience-heading font-medium mb-2
                             ">{item.heading}</h3>
                                        <p className="experience-time text-base mb-3 font-medium ">{item.duration}</p>
                                        <div className="experience-summary">{item.summary}</div>
                                        <div className="experience-img w-[50px] h-[50px] rounded-full overflow-hidden absolute top-4 right-5 z-20 bg-white ">
                                            <img src={item.logo} className='w-full p-2 h-auto' alt="" />
                                        </div>
                                    </div>
                                    <div data-aos="fade-right" className="experience-dot absolute rounded-full bg-white z-20"></div>
                                    <div data-aos="fade-down" className="timeline z-10 w-1 h-full absolute top-1 bg-slate-200 sm:right-0"></div>
                                    <div data-aos="fade-right" className="triangle1 absolute top-11 sm:right-3"></div>
                                </div>
                                :
                                <div key={index} className="Experience-Content right-content sm:w-1/2 relative pt-3 sm:left-1/2 left-1 w-full">
                                    <div data-aos="fade-left" className="experience-card relative h-[200px] overflow-y-auto bg-slate-200 px-5 pt-5 rounded-2xl">
                                        <h3 className="experience-heading font-medium text-2xl mb-2">{item.heading}</h3>
                                        <p className="experience-time text-base mb-3 font-medium ">{item.duration}</p>
                                        <div className="experience-summary">{item.summary}</div>
                                        <div className="experience-img w-[50px] h-[50px] rounded-full overflow-hidden absolute top-4 right-5 z-20 bg-white ">
                                            <img src={item.logo} className='w-full p-2 h-auto' alt="" />
                                        </div>
                                    </div>
                                    <div data-aos="fade-left" className="experience-dot absolute -left-3  rounded-full bg-white z-20"></div>
                                    <div data-aos="fade-down" className="timeline z-10 w-1 h-full absolute top-1 -left-1 bg-slate-200"></div>
                                    <div data-aos="fade-left" className="triangle2 absolute top-11 left-2"></div>
                                </div>
                        )
                    })}
                    {/* <div className="dot-container">
                        <div data-aos="fade-down" className="ending-dot"></div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default ExperienceSec
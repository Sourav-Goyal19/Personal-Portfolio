import './CollaborateSec.scss'

export const CollaborateSec = (props) => {
    return (
        <section className='Collaborate'>
            <div className="sectionContainer">
                <div data-aos="fade-right" className="Section-Heading ">
                    <h2 className={`heading`}>Let's Collaborate</h2>
                </div>
                <div data-aos="fade-left" className="collaborate-content">
                    <p>Eager to breathe new life into your project or website? <br />Let's partner up and design an online masterpiece that leaves a lasting impression!</p>
                    <button data-aos="fade-up" onClick={() => { props.pageAnimation('Contact', 'contact') }}>Click Here</button>
                </div>
            </div>
        </section>
    )
}

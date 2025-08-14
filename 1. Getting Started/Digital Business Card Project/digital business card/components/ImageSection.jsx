export default function ImageSection() {
    return ( 
        <>
            <section>
                <img src="/images/jabez-roberts.jpg" alt="Jabez Roberts" className="display-photo" />
            </section>
            
            <h1>Jabez Roberts</h1>
            <h2 className="title">Full Stack Engineer</h2>
            <h3 className="website-contact">jabezroberts.com</h3>

            <section className="button-row">
                <button>
                    <i className="fa-solid  fa-envelope"></i>
                    Email
                </button>
                
                <button className="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>LinkedIn</button>
            </section>
        </>
    )
}
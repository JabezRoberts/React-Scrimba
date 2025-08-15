export default function Main() {
    return (
        <main>
            <h1>Fun facts about React</h1>
            <ul className="facts-list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

export default function Contact(props) {
    console.log(props)
    return (
        <article className="contact-card">
            <img
                src="./images/mr-whiskerson.png"
                alt="Photo of Mr. Whiskerson"
            />
            <h3>Mr. Whiskerson</h3>
            <div className="info-group">
                <img
                    src="./images/phone-icon.png"
                    alt="phone icon"
                />
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <img
                    src="./images/mail-icon.png"
                    alt="mail icon"
                />
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </article>
    )
}

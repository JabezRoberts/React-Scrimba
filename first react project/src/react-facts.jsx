/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding more styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="react-logo.png"` in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */
import { createRoot } from "react-dom/client";
// import { Fragment } from "react"; can be replaced with `<>` and `</>` for shorthand
const root = createRoot(document.getElementById("root"));

function Header() {
    return (
        <header className="nav-header">
            <img src="react-logo.png" alt="React logo image" className="nav-image"/>
            <nav>
                <ul>
                    <li className="nav-items">Pricing</li>
                    <li className="nav-items">About</li>
                    <li className="nav-items">Contact</li>
                </ul>
            </nav>
        </header>
    )

}

function MainContent() {
    return (
        <>
            <h1>Reasons I'm excited to Learn React</h1>
            <ol>
                <li>It's a powerful JS Framework</li>
                <li>It's widely used</li>
                <li>Offers entry to a high-salary career</li>
            </ol>

        </>
    )
}

function Footer() {
    return (
        <footer>
            © 2025 Roberts development. All rights reserved.
        </footer>
    )
}
function LearnReactReasons() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
            
        </>
    )
}




// root.render(
//     <main>
 
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on Github</li>
//             <li>Is maintained by Meta</li>
//             <li>Powers thousands of enterprises, including mobile apps</li>
//         </ul>
//     </main>
// )

root.render(
    <LearnReactReasons />
)

/*

index.css
body {
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
    background: #27292c;
    color: white;
}

h1 {
    margin-top: 30px;
}

img {
    width: 40px;
}

*/
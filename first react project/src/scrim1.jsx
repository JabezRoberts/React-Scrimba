/**
 * Challenge: set up a new React app from scratch!
 * Hints:
 * 1. Need to import the method to create a new root 
 *    from the "react-dom/client" package)
 * 2. Use that root to render some JSX. For now, just render
 *    an h1 element that says anything you want.
 */
import { createRoot } from "react-dom/client";


// Get the root element from index.html
const container = document.getElementById("root");

// Create a root for your React application
const root = createRoot(container);

// Can replace the two lines above with
//const root = createRoot(document.getElementById("root")); // does the same thing

// Render an h1 element with some text
root.render(
    <h1>This is a random react line</h1>
)



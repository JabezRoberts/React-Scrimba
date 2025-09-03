import React from "react"
import { Outlet, Navigate } from "react-router-dom"

export default function AuthRequired() {
    const authenticated = false
    if (!authenticated) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}



import React from "react"
import { Outlet, Link } from "react-router-dom"

export default function Layout() {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="protected">Protected</Link>
    </nav>
    <main>
      <Outlet />
    </main>
    </>
  );
}



import React from "react"
import ReactDOM from "react-dom/client"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Layout from "./Layout"
import AuthRequired from "./AuthRequired"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Home page</h1>} />
          
          <Route element={<AuthRequired />}>
            <Route path="protected" element={<h1>Super secret info here</h1>} />
          </Route>
          
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
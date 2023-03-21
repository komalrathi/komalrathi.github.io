import * as React from "react"
import { Link } from "gatsby"
import Navbar from "./Navbar/Navbar"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/blog"
          style = {
            {
              fontSize:"2rem",
              textAlign:"center",
              display:"block",
            }
          }>
            {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/blog"
      style = {
        {
          fontSize:"2rem",
          textAlign:"center",
          display:"block"
        }
      }>
        {title}
      </Link>
    )
  }

  return (
    <div>
      <Navbar />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">
          {header}
        </header>
        <main>
          {children}
        </main>
        <footer style={
          {
            textAlign:"center"
          }
        }>
          © Komal Rathi {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout

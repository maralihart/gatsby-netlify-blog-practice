import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  let navbar

  navbar = (
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">S2B</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem href="#">
        Home
      </NavItem>
      <NavItem href="#">
        Blog
      </NavItem>
    </Nav>
  )

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Navbar>{navbar}</Navbar>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Developed by Mara Hart with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout

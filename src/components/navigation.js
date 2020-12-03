import React from "react"
import { Navbar, Nav, NavItem } from "react-bootstrap"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <Navbar fixed="top">
      <Navbar.Brand>
        S2B
      </Navbar.Brand>
      <Nav>
        <NavItem>Home</NavItem>
        <NavItem href="#">Blog</NavItem>
      </Nav>
    </Navbar>
  )
}

export default Navigation

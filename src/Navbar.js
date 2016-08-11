import React, { Component } from 'react'
import { Nav, NavItem, NavDropdown, MenuItem, Navbar } from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Salesforce Internship - Summer 2016</a>
          </Navbar.Brand>
        </Navbar.Header>

        <Nav pullRight>
          <NavItem eventKey={1} href="/projects">Projects</NavItem>
          <NavDropdown eventKey={2} title="What I learned" id="basic-nav-dropdown">
            <MenuItem eventKey={2.1} href="/technology">Technologies</MenuItem>
            <MenuItem eventKey={2.2} href="/nonTech">Non tech</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="/thanks">Thanks</NavItem>
          <NavItem eventKey={3} href="/contact">Contact</NavItem>
        </Nav>
      </Navbar>
    </div>
    );
  }
}

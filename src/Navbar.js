import React, { Component } from 'react'
import { Nav, NavItem, NavDropdown, MenuItem, Navbar } from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Salesforce Internship - Summer 2016</a>
          </Navbar.Brand>
        </Navbar.Header>

        <Nav>
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavItem eventKey={2} href="#">About</NavItem>
          <NavItem eventKey={3} href="/projects">Projects</NavItem>
          <NavDropdown eventKey={4} title="What I learned" id="basic-nav-dropdown">
            <MenuItem eventKey={4.1} href="/technology">Technologies</MenuItem>
            <MenuItem eventKey={4.2} href="/nonTech">Non tech</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={4.3}>Details</MenuItem>
          </NavDropdown>
          <NavItem eventKey={5} href="/thanks">Thanks</NavItem>

        </Nav>
    </Navbar>
    );
  }
}

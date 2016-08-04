import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import { Nav, NavItem, NavDropdown, MenuItem, Navbar } from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Salesforce Internship - Summer 2016</a>
          </Navbar.Brand>
        </Navbar.Header>

        <Nav>
          <NavItem eventKey={1} href="#">Home</NavItem>
          <NavItem eventKey={2} href="#">About</NavItem>
          <NavItem eventKey={3} href="#">Projects</NavItem>
          <NavDropdown eventKey={4} title="What I learned" id="basic-nav-dropdown">
            <MenuItem eventKey={4.1}>Technologies</MenuItem>
            <MenuItem eventKey={4.2}>Non tech</MenuItem>
            <MenuItem eventKey={4.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={4.3}>Separated link</MenuItem>
          </NavDropdown>

        </Nav>
    </Navbar>
    );
  }
}

import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div className="mainContent">
        <h1>Projects</h1>
        <ul>
          <li>PhantomCSS</li>
          <li>Contact-Audience Builder Tickets:</li>
            <ul>
              <li>ES lint fixes</li>
              <li>Audience Builder Pageheader</li>
              <li>Environment Endpoints</li>
            </ul>
          <li>Eventforce App/Logo</li>
          <li>UX SLDS Postcards</li>
          <li>Internship Summary Website (originally a deployment schedule app)</li>
        </ul>
      </div>
    );
  }
}

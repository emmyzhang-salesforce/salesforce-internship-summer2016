import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div className="projectsContent">
        <h1>Summer Projects</h1>
        <ul>
          <li>PhantomCSS</li>
          <li>Contact-Audience Builder Tickets:</li>
            <ul>
              <li>ES lint fixes</li>
              <li>Audience Builder Pageheader</li>
              <li>Environment Endpoints</li>
            </ul>
          <li>Eventforce App</li>
          <li>UX SLDS Postcards</li>
          <li>Internship Summary Website (originally a deployment schedule app)</li>
        </ul>
      </div>
    );
  }
}

import React, { Component } from 'react'
import Navbar from './Navbar'

export default class LayoutComponent extends Component {
    render() {
      return (
          <div>
            <Navbar />
            {this.props.children}
          </div>
      );
    }
}

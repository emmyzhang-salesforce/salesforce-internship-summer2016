import React, { Component } from 'react'

export default class LayoutComponent extends Component {
    render() {
      return (
          <div>
              {this.props.children}
          </div>
      );
    }
}

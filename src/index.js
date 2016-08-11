import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Navbar from './Navbar'
//import LayoutComponent from './LayoutComponent'
import IndexComponent from './IndexComponent'
import Projects from './Projects'
import TechnologyChart from './TechnologyChart'
import NonTechChart from './NonTechChart'
import Thanks from './Thanks'
import Contact from './Contact'


class LayoutComponent extends Component {
    render() {
      return (
          <div>
            <Navbar />
            {this.props.children}
          </div>
      );
    }
}

render((
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={LayoutComponent}>
        <IndexRoute component={IndexComponent}/>
        <Route path="projects" component={Projects}/>
        <Route path="technology" component={TechnologyChart}/>
        <Route path="nonTech" component={NonTechChart}/>
        <Route path="thanks" component={Thanks}/>
        <Route path="contact" component={Contact}/>
      </Route>
    </Router>
  </div>
), document.getElementById('root'))

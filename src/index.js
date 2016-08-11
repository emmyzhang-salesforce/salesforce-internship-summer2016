import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Navbar from './Navbar'
import IndexComponent from './IndexComponent'
import LayoutComponent from './LayoutComponent'
import Projects from './Projects'
import TechnologyChart from './TechnologyChart'
import NonTechChart from './NonTechChart'
import Thanks from './Thanks'

var Navigation = React.createClass ({
  render: function() {
    return (
      <Navbar />
    );
  }
})

render((
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={LayoutComponent}>
        <IndexRoute component={IndexComponent}/>
        <Route path="/projects" component={Projects}/>
        <Route path="technology" component={TechnologyChart}/>
        <Route path="nonTech" component={NonTechChart}/>
        <Route path="thanks" component={Thanks}/>
      </Route>
    </Router>
  </div>
), document.getElementById('root'))

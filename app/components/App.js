import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Contact from './Contact'
import Languages from './Languages'
import Skills from './Skills'

import SVGInline from 'react-svg-inline'
import animatedLogoSVG from './images/site-images/fullAnimatedLogo.svg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Contact/>
        <Switch>
          <Route exact path="/" component={Languages} />
          <Route path="/languages/:item" component={Languages} />
        </Switch>
      </div>
    );
  }
}

export default App;
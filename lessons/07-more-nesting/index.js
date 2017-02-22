import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="repos" component={Repos}/>
      <Route path="repos/:userName/:repoName" component={Repo}/>
      <Route path="about" component={About}/>
    </Route>
    <Route path="/aarepos" component={Repos}/>
  </Router>
), document.getElementById('app'))

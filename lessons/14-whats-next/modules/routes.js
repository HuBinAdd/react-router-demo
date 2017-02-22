import React from 'react'
import { Route, IndexRoute ,Redirect} from 'react-router'
import App from './App'
import About from './About'
import Repos from './Repos'
import Repo from './Repo'
import Home from './Home'
import Erro from './404'

const requireAuth = ({params}, replace) => {
    // Redirect to Home page if not an Admin
    replace({ pathname: '/' })
}

module.exports = (
  <Route>
	  <Route path="/" component={App}>
	    <IndexRoute component={Home}/>
	    <Route path="/repos" component={Repos}>
	      <Redirect from="/repos/a1" to="/repos"/>
	      <Route path="/repos/:userName/:repoName" component={Repo}/>
	      <Route path="/repos/a2" onEnter={requireAuth} />
	    </Route>
	    <Route path="/about" component={About}/>
	  </Route>
	  <Route path="/*" component={Erro}/>
  </Route>
)

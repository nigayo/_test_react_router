import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, browserHistory, IndexRoute} from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>

	          <IndexRoute component={Home}/> //jsx's default child
	          <Route path="/about" component={About}/>
	          <Route path="/repos" component={Repos}>
	          	<Route path="/repos/:userName/:repoName" component={Repo}/>
          	    </Route>

          	</Route>
      </Router>
), document.getElementById('app'))

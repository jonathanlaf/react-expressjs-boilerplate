import React, { Component } from 'react';
import { Switch, Route }    from 'react-router-dom';

import Homepage  from '../Homepage/Homepage';
import Dashboard from '../Dashboard/Dashboard';
import notFound  from '../notFound/notFound';

class Router extends Component {

		constructor()
		{
				super();
				this.state = {
						boilerplateVersion: '0.0.1'
				};
		}

		render()
		{
				return (<Switch>
						<Route exact path='/' component={() => <Homepage boilerplateVersion={this.state.boilerplateVersion}/>}/>
						<Route path="/dashboard" exact component={Dashboard}/>
						<Route component={notFound}/>
				</Switch>);
		}
}

export default Router;
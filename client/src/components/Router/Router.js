import React, { Component } from 'react';
import { Switch, Route }    from 'react-router-dom';

import Homepage  from '../Homepage/Homepage';
import Dashboard from '../Dashboard/Dashboard';
import notFound  from '../notFound/notFound';

class Router extends Component {
  state = {
    users: []
  };

  componentDidMount ()
  {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  render ()
  {
    return (<Switch>
      <Route exact path="/"
             component={() => <Homepage users={this.state.users}/>}/>
      <Route path="/dashboard" exact component={Dashboard}/>
      <Route component={notFound}/>
    </Switch>);
  }
}

export default Router;

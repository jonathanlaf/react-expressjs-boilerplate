import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class notFound extends Component
{
  render()
  {
    const RedirectToHomepageBtn =
      withRouter(({ history }) => (<button onClick={() =>
      {
        history.push('/');
      }}>
        Go to homepage
      </button>));
    return (<React.fragment>
      <h1>Page not found.</h1>
      <p>
        The URL &quot;{this.props.location.pathname}&quot; is not
        found.<br/>
        Contact your IT department for more information.
      </p>
      <p>
        <RedirectToHomepageBtn/>
      </p>
    </React.fragment>);
  }
}

notFound.propTypes = {
  location: PropTypes.object.isRequired
};
export default notFound;

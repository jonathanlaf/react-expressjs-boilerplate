import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class notFound extends Component {
  render() {
    const RedirectToHomepageBtn = withRouter(({ history }) => (<button
      onClick={() => { history.push('/'); }}
    >
								Go to homepage
                                                               </button>));
    return (<React.fragment>
      <h1>Page not found.</h1>
      <p>
												The URL "{this.props.location.pathname}" is not
												found.<br />
												Contact your IT department for more information.
      </p>
      <p>
        <RedirectToHomepageBtn />
      </p>
            </React.fragment>);
  }
}

export default notFound;

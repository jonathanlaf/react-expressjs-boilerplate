import React from 'react';
import PropTypes from 'prop-types';

const Homepage = ({ users }) => (
  <section>
    <article>
      <h2>Home page example</h2>
      <hr />
      <ul>
        {users.map(user =>
          <li key={user.id}>{user.username}</li>)}
      </ul>
    </article>
  </section>
);

Homepage.propTypes = {
  users: PropTypes.array.isRequired
};

export default Homepage;

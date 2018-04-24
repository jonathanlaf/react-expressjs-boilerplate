import React from 'react';

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

export default Homepage;

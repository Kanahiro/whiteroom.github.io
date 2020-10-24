import * as React from 'react';
import Layout from '../components/layout/index';
import Link from 'gatsby-link';

const SecondPage = () => (
  <Layout>
    <div>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
);

export default SecondPage;
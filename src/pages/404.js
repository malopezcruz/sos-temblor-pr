import React from 'react';
import { Link } from 'gatsby';

import Layout from '../templates/Layout';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <Layout>
      <SEO pageTitle="404 Not Found" />
      <h1 className="text-3xl lg:text-5xl text-center">Page Not Found</h1>
      <p>
        Plase go to <Link to="/">#SOSTemblorPR</Link>
      </p>
    </Layout>
  );
};

export default NotFound;

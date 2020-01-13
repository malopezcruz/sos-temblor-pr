import React from 'react';

import Layout from '../templates/Layout';
import SEO from '../components/SEO';
import List from '../components/List';
// import SimpleMap from '../components/SimpleMap';

const IndexPage = () => {
  return (
    <Layout>
      {/* <SimpleMap /> */}
      <SEO pageTitle="Home" />
      <List />
    </Layout>
  );
};

export default IndexPage;

import React from 'react';
import Layout from '../templates/Layout';
import SEO from '../components/SEO';
import List from '../components/List';

const IndexPage = () => {
  return (
    <Layout>
      <SEO pageTitle="APP" />
      <List />
    </Layout>
  );
};

export default IndexPage;

import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../templates/Layout';
import SEO from '../components/SEO';

const NotFound = () => {
  const { notFoundImage } = useStaticQuery(graphql`
    query {
      notFoundImage: file(
        relativePath: { eq: "patrick-tomasso-QMDap1TAu0g-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1028) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO pageTitle="404 Not Found" />
      <figure>
        <Img
          fluid={notFoundImage.childImageSharp.fluid}
          alt="A wall"
          className="rounded-lg"
        />
        <figcaption className="mt-1 text-xs text-right text-gray-700 ">
          Photo by Patrick Tomasso on Unsplash
        </figcaption>
      </figure>
      <h1 className="text-3xl lg:text-5xl text-center">Page Not Found</h1>
      <p>
        Plase go to <Link to="/">#SOSTemblorPR</Link>
      </p>
    </Layout>
  );
};

export default NotFound;

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

function SEO({ pageTitle, meta, pageDescription, link }) {
  const {
    title,
    description,
    author,
    siteUrl,
    googleSiteVerification,
    msSiteVerification,
    siteType,
    siteId,
    latitude,
    longitude,
    phoneNumber,
    email,
    siteLogo,
    siteImage,
    address: { street, town, zipcode, state },
    hasMap,
    sameAs,
    dayOfWeek,
    opens,
    closes,
    lang,
    globalStyle,
  } = useSiteMetadata();

  const schemaOrgWebpage = {
    '@context': 'http://schema.org',
    '@type': siteType,
    '@id': siteId,
    name: title,
    logo: siteLogo,
    description,
    priceRange: '',
    image: siteImage,
    url: siteUrl,
    email: `mailto:${email}`,
    telephone: `+1-${phoneNumber}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: street,
      addressLocality: town,
      postalCode: zipcode,
      addressCountry: state,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    },
    hasMap,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek,
      opens,
      closes,
    },
    sameAs,
  };

  const metaDescription = pageDescription || description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      bodyAttributes={{
        class: globalStyle,
      }}
      title={pageTitle}
      titleTemplate={`%s | ${title}`}
      script={[
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(schemaOrgWebpage),
        },
      ]}
      link={[
        {
          // rel: 'dns-prefetch',
          // href: 'maps.google.com',
        },
        {
          rel: 'dns-prefetch',
          href: 'www.google-analytics.com',
        },
      ].concat(link)}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `google-site-verification`,
          content: googleSiteVerification,
        },
        {
          name: `msvalidate.01`,
          content: msSiteVerification,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  // lang: `es`,
  link: [],
  meta: [],
  pageDescription: ``,
};

SEO.propTypes = {
  pageDescription: PropTypes.string,
  // lang: PropTypes.string,
  link: PropTypes.arrayOf(PropTypes.object),
  meta: PropTypes.arrayOf(PropTypes.object),
  pageTitle: PropTypes.string.isRequired,
};

export default SEO;

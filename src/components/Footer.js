import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SocialMediaList from './SocialMediaList';

const Footer = () => {
  const date = useStaticQuery(graphql`
    query {
      currentBuildDate {
        currentDate
      }
    }
  `);
  return (
    <footer className="flex flex-col text-left md:py-4 md:text-left lg:flex-row lg:justify-between lg:content-start">
      <div className="lg:mr-8">
        <p className="text-sm">
          Proyecto para demostrar el uso de{' '}
          <a
            className="underline text-blue-800"
            href="https://www.gatsbyjs.org/"
          >
            GatsbyJs
          </a>
          ,{' '}
          <a
            className="underline text-blue-800"
            href="https://www.google.com/sheets/about/"
          >
            Google Spreadsheet
          </a>
          , como base de datos,{' '}
          <a
            className="underline text-blue-800"
            href="https://tailwindcss.com/"
          >
            Tailwindcss y alojado en{' '}
            <a
              className="underline text-blue-800"
              href="https://www.netlify.com/"
            >
              Netlify
            </a>
          </a>
          . Los datos fueron tomados del respositorio{' '}
          <a
            className="underline text-blue-800"
            href="https://github.com/gcollazo/sos-sur"
            rel="noopenner nofollow"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
          >
            SOS Sur
          </a>
          .
        </p>
        <div className="uppercase text-xs">
          Última actualización: {date.currentBuildDate.currentDate}
        </div>
      </div>
      <SocialMediaList />
    </footer>
  );
};

export default Footer;

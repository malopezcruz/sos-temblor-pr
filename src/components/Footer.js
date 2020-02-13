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
            className="border-b-4 border-blue-300 hover:border-blue-400"
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GatsbyJs
          </a>
          ,{' '}
          <a
            className="border-b-4 border-blue-300 hover:border-blue-400 hover:border-blue-400"
            href="https://www.google.com/sheets/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Spreadsheet
          </a>
          , como base de datos,{' '}
          <a
            className="border-b-4 border-blue-300 hover:border-blue-400"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwindcss
          </a>{' '}
          y alojado en{' '}
          <a
            className="border-b-4 border-blue-300 hover:border-blue-400"
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          . Los datos fueron tomados del respositorio{' '}
          <a
            className="border-b-4 border-blue-300 hover:border-blue-400"
            href="https://github.com/gcollazo/sos-sur"
            target="_blank"
            rel="noopener noreferrer"
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

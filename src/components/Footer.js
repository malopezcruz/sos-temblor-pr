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
          Si pertenece a alguna de las organizaciones que da asistencia a las
          personas damnificadas por los temblores y desea añadir más recursos o
          información, favor de escribir a{' '}
          <a
            className="underline text-blue-800"
            href="mailto:malope@dcogigo.com"
          >
            malopez@dcodigo.com
          </a>{' '}
          para darle acceso a Google Sheets. Se utilizó inialmente la base de
          datos encontrada en repositorio{' '}
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

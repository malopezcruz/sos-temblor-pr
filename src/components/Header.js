import React from 'react';
import { Link } from 'gatsby';

import { useSiteMetadata } from '../hooks/useSiteMetadata';

const Header = () => {
  const { title, tagline, navType } = useSiteMetadata();

  const navSelection = navType => {
    switch (navType) {
      case 'navleft':
        return 'flex';
      case 'navRight':
        return 'flex md:justify-between';
      default:
        return 'flex flex-col';
    }
  };

  return (
    <header className={`flex py-6 lg:py-8 ${navSelection(navType)}`}>
      <h1 className="leading-tight w-auto inline-block text-blue-700">
        <Link className="text-3xl lg:text-5xl pb-0 font-bold" to="/">
          {title}
        </Link>
      </h1>
      {tagline && <span className="pt-0 mb-0 text-gray-700">{tagline}.</span>}
    </header>
  );
};

export default Header;

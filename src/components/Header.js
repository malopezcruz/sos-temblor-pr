import React from 'react';
import { Link } from 'gatsby';

import { useSiteMetadata } from '../hooks/useSiteMetadata';
// import Navigation from './Navigation';

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
      <h1 className="leading-tight w-auto inline-block">
        <Link className="text-3xl lg:text-5xl pb-0 font-bold" to="/">
          {title}
        </Link>
      </h1>
      {tagline && <span className="pt-0 mb-0">{tagline}.</span>}
      {/* <div className="mt-4">
        <span
          className="fb-share-button"
          data-href="https://sostemblorpr.netlify.com"
          data-layout="button"
          data-size="small"
        >
          <a
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsostemblorpr.netlify.com%2F&amp;src=sdkpreparse"
            className="fb-xfbml-parse-ignore mr-3"
          >
            Share
          </a>
        </span>
        <span>
          <a
            href="https://twitter.com/intent/tweet?button_hashtag=SEOTemblorPR&ref_src=twsrc%5Etfw"
            className="twitter-hashtag-button"
            data-related="malopezcruz"
            data-dnt="true"
            data-show-count="false"
          >
            Tweet #SOSTemblorPR
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </span>
      </div> */}

      {/* <Navigation /> */}
    </header>
  );
};

export default Header;

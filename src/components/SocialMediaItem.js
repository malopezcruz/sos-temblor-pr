import React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMediaItem = ({ icon, userHandle, ariaLabel, link, rel }) => {
  const { primaryColor } = useSiteMetadata();

  return (
    <li className="first:ml-0 ml-4">
      <a
        href={`${link}`}
        // eslint-disable-next-line react/jsx-no-target-blank
        target="_blank"
        aria-label={ariaLabel}
        rel={rel}
      >
        <FontAwesomeIcon
          icon={icon}
          className={`text-${primaryColor} text-2xl`}
        />
      </a>
    </li>
  );
};

export default SocialMediaItem;

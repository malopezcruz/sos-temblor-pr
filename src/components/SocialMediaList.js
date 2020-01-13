import React from 'react';
import JSONData from '../../content/stattic-content/socialmedialist.json';
import SocialMediaItem from './SocialMediaItem';

const SocialMediaList = () => {
  return (
    <ul className="flex self-center my-8 lg:my-0 lg:self-start">
      {JSONData.socialIcons.map((data, index) => {
        return (
          <SocialMediaItem
            key={`items_${index}`}
            icon={data.icon}
            link={data.link}
            rel={data.rel}
            name={data.name}
            ariaLabel={data.ariaLabel}
            userHandle={data.userHandle}
          />
        );
      })}
    </ul>
  );
};

export default SocialMediaList;

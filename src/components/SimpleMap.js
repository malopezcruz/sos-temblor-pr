import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import Marker from '../components/Marker';

const SimpleMap = () => {
  const { latitude, longitude, themeColor, title } = useSiteMetadata();
  const [center] = useState({ lat: latitude, lng: longitude });
  const [zoom] = useState(17);

  return (
    <div className="rounded-lg mb-8" style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLEMAP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker
          lat={latitude}
          lng={longitude}
          name={title}
          color={themeColor}
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;

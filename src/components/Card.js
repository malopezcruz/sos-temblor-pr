import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({
  name,
  address,
  lon,
  lat,
  necessity,
  serviceType,
  contact,
  town,
}) => {
  return (
    <li className="mb-4 rounded">
      <article className="px-6 py-5 bg-gray-200">
        <span
          className={`bg-${(() => {
            switch (serviceType) {
              case 'SERVICIOS SALUD':
                return 'blue';
              case 'ALIMENTO Y/O SUMINISTROS':
                return 'red';
              case 'REFUGIO/CAMPAMENTO':
                return 'green';
              default:
                return 'gray';
            }
          })()}-700 text-xs w-auto inline-block text-white py-1 px-2 mr-2`}
        >
          <strong>{serviceType}</strong>
        </span>
        <span
          className={`bg-${(() => {
            switch (town) {
              case 'GUAYANILLA':
                return 'purple';
              case 'PONCE':
                return 'indigo';
              case 'GUÁNICA':
                return 'pink';
              case 'YAUCO':
                return 'teal';
              case 'COAMO':
                return 'yellow';
              case 'LARES':
                return 'orange';
              case 'LAJAS':
                return 'red';
              case 'UTUADO':
                return 'blue';
              case 'MARICAO':
                return 'blue';
              case 'JUANA DÍAZ':
                return 'green';
              case 'ADJUNTAS':
                return 'blue';
              case 'PEÑUELAS':
                return 'blue';
              default:
                return 'gray';
            }
          })()}-700 text-xs w-auto inline-block text-white py-1 px-2`}
        >
          <strong>{town}</strong>
        </span>
        <h1 className="text-xl font-bold my-2">{name}</h1>
        <div className="mb-1">
          <a
            className="text-blue-700 font-bold hover:underline visited:text-purple-900"
            href={`https://www.google.com/maps/search/?api=1&query=${lat},${lon}`}
          >
            <FontAwesomeIcon
              // icon="map-marked-alt"
              icon="link"
              className="mr-2 text-gray-600 text-base"
            />
            {address}
          </a>
        </div>
        {necessity && (
          <div>
            <strong>Necesidades:</strong> {necessity}
          </div>
        )}
        {contact && (
          <div>
            <strong>Contacto:</strong> {contact}
          </div>
        )}
      </article>
    </li>
  );
};

export default Card;

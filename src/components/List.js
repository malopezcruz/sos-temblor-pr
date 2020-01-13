import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Card from './Card';

const List = () => {
  const data = useStaticQuery(graphql`
    query allData {
      allGoogleSpreadsheetMySheetData {
        nodes {
          address
          id
          town
          lat
          lon
          name
          necessity
          serviceType
          contact
        }
      }
    }
  `);

  return (
    <ul>
      {data.allGoogleSpreadsheetMySheetData.nodes.map(item => {
        return (
          <Card
            key={item.id}
            name={item.name}
            town={item.town}
            address={item.address}
            lat={item.lat}
            lon={item.lon}
            necessity={item.necessity}
            serviceType={item.serviceType}
            contact={item.contact}
          />
        );
      })}
    </ul>
  );
};

export default List;

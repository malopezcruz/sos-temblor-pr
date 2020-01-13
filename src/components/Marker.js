import React from 'react';

const Marker = props => {
  const { color, name, id } = props;
  return (
    <div>
      <div
        className="pin"
        style={{ backgroundColor: color, cursor: 'pointer' }}
        title={name}
        id={id}
      />
      <div className="pulse" />
    </div>
  );
};

export default Marker;

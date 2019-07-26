import React from 'react';

const PhonesCard = ({ name, id, manufacturer, description, price, imageFileName }) => {
  return (
    <div>
       <h2>{name}</h2>
      <p>{id}</p>
      <p> {manufacturer}</p>
      <p>Descripción: {description}</p>
      <p>Price: {price}</p>
      <p> {imageFileName}</p>
    </div>
  )
};

export default PhonesCard;
// PlanetDetail.js
import React from 'react';

const PlanetDetail = ({ planet }) => {
  return (
    <div>
      <h2>{planet.name}</h2>
      <p>{planet.description}</p>
      {/* Zde můžete přidat další informace o planetě */}
    </div>
  );
};

export default PlanetDetail;

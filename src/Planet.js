// Planet.js
import React from 'react';

const Planet = ({ planet, selectPlanet }) => {
  return (
    <div className={`orbit orbit-${planet.index+1}`} onClick={() => selectPlanet(planet)}>
      <img src={planet.image} alt={planet.name} className="planet" />
      <p>{planet.name}</p>
    </div>
  );
};

export default Planet;

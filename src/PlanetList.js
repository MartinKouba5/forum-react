// PlanetList.js
import React from 'react';
import Planet from './Planet';

const PlanetList = ({ planets, selectPlanet }) => {
  return (
    <div>
      {planets.map((planet, index) => (
        <Planet key={index} planet={{...planet, index}} selectPlanet={selectPlanet} />
      ))}
    </div>
  );
};

export default PlanetList;

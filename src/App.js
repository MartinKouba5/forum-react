// App.js
import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import PlanetList from './PlanetList';
import PlanetDetail from './PlanetDetail';
import SunImage from './sun.png';
import MercuryImage from './mercury.png';
import VenusImage from './venus.png';
import EarthImage from './earth.png';
import MarsImage from './mars.png';
import JupiterImage from './jupiter.png';
import SaturnImage from './saturn.png';
import UranusImage from './uranus.png';
import NeptuneImage from './neptune.png';

function App() {
  const planetsData = [
    { name: 'Merkur', image: MercuryImage, description: 'Planeta Merkur je planeta Slunci nejbližší. Patří mezi planety zemského typu, což znamená, že jde o těleso s pevným povrchem složeným z hornin, převážně z různých křemičitanů. Až do objevu Pluta, kterého dnes počítáme mezi planety již jen z tradice, byl Merkur považován za nejmenší planetu sluneční soustavy. Svým průměrem je dokonce menší než některé měsíce velkých planet (Jupiterův Ganymedes, Saturnův Titan). Ve srovnání s velikostí Země je Merkur v průměru méně než poloviční.' },
    { name: 'Venuše', image: VenusImage, description: 'Venuše je druhou planetou v pořadí od Slunce a spolu s Merkurem patří k tzv. vnitřním planetám, tj. planetám obíhajícím blíže ke Slunci než naše Země a tedy uvnitř její dráhy. Podobně jako Merkur a Mars je i Venuše planetou terestrickou. Pro naši Zemi je Venuše druhým nejbližším větším kosmickým tělesem (po Měsíci) a i na obloze je po Slunci a Měsíci nejjasnějším objektem. V době největšího jasu je možné ji spatřit pouhým okem i během dne.' },
    { name: 'Země', image: EarthImage, description: 'Země je největší terestrická planeta sluneční soustavy, a to jak ve velikosti, tak i v hmotnosti. Mimo tato dvě prvenství je Země také mezi terestrickými tělesy planeta s největší hustotou, s největší povrchovou gravitací, nejsilnějším magnetickým polem a nejrychlejší rotací.    ' },
    { name: 'Mars', image: MarsImage, description: 'Popis planety Mars je čtvrtou planetou v pořadí od Slunce a současně poslední planetou pozemského typu. Na rozdíl od Merkuru a Venuše obíhá dál od Slunce než naše Země, tedy vně zemské dráhy. Nejlepší pozorovací podmínky nastávají v období kolem opozice se Sluncem, kdy se planeta může přiblížit Zemi až na 55 milionů kilometrů. Opozice Marsu se opakují vždy zhruba po 2 letech. Na obloze je Mars nápadný svou načervenalou barvou, která je způsobena velkým obsahem oxidu železa v povrchových horninách.    ' },
    { name: 'Jupiter', image: JupiterImage, description: 'Jupiter je první velkou planetou a současně i největší planetou sluneční soustavy. Kolem Slunce obíhá více než pětkrát dále než Země a je v průměru téměř 12krát větší než naše planeta. Nejlépe jej lze pozorovat kolem opozice se Sluncem, kdy je planeta nad obzorem prakticky po celou noc. Vzhledem k tomu, že oběh Jupiteru kolem Slunce trvá necelých dvanáct roků, opakují se opozice vždy po zhruba 13 měsících.    ' },
    { name: 'Saturn', image: SaturnImage, description: 'Saturn je bezpochyby nejkrásnější planetou sluneční soustavy. Vděčí za to soustavě prstenců, které pozoroval již počátkem 17. století Galileo Galilei a jsou tedy viditelné i v malém dalekohledu. Podobně jako Jupiter patří i Saturn mezi velké planety. Jeho rovníkový průměr dosahuje téměř desetinásobku rozměrů Země. Saturn je poslední planetou, která je ze Země viditelná pouhým okem a tedy i poslední planetou známou do druhé poloviny 18. století. Kolem Slunce oběhne téměř za třicet roků a proto se jeho poloha mezi hvězdami mění jen pomalu. Opozice se Sluncem, období nelepší pozorovatelnosti, se střídají po pouhých 54 týdnech, tedy po době jen o málo delší než pozemský rok.    ' },
    { name: 'Uran', image: UranusImage, description: 'Uran je třetí velkou planetou sluneční soustavy a v pořadí sedmou od Slunce. Je na hranici viditelnosti pouhým okem, objevena byla však až pomocí dalekohledu anglickým astronomem Williamem Herschelem roku 1781. Kolem Slunce oběhne za dlouhých 84 roků, a tak pouze dlouhověký člověk prožije průchod planety celým zvířetníkem. Opozice se Sluncem se opakují v době jen asi o čtyři dny delší než je pozemský rok a tak se poloha planety mezi hvězdami dlouhodobě mění jen pomalu.    ' },
    { name: 'Neptun', image: NeptuneImage, description: 'Neptun je poslední z velkých planet sluneční soustavy. Byl objeven až roku 1846, když jeho poloha byla předem vypočítána na základě poruch ve dráze Urana. Neptun oběhne kolem Slunce jednou za necelých 165 roků, takže od doby svého oběhu ještě nestačil dokončit ani jeden celý oběh. Na obloze se tedy pohybuje velmi pomalu a doba vhodná pro pozorování se dlouhodobě prakticky nemění. Planeta je pozorovatelná v současnosti nejlépe v druhé polovině léta, k pozorování je třeba již větší dalekohled a mapka hvězdného okolí, která poslouží k jeho vyhledání. V dalekohledu je pak vidět nepatrný kotouček, při malém zvětšení snadno zaměnitelný s hvězdou.    ' }
  ];
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const detailRef = useRef(null);

  const selectPlanet = (planet) => {
    setSelectedPlanet(planet);
    console.log(`Vybrána planeta: ${planet.name}`);
  };

  useEffect(() => {
    if (selectedPlanet && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedPlanet]);

  return (
    <div className="App">
      <h1>ENCYKLOPEDIE PLANET</h1>

      <div className="solar-system">
        <img src={SunImage} alt="Slunce" className="sun" />
        <PlanetList planets={planetsData} selectPlanet={selectPlanet} />
      </div>
      <div id="detail" ref={detailRef}>
        {selectedPlanet && <PlanetDetail planet={selectedPlanet} />}
      </div>
    </div>
  );
}

export default App;

import logements from '../data/logements.json';
import Logement from './Logement'; //On importe le composant Logement

const logementsData = () => {
  //Creation d'une div, class et index pour chaque sous tableau
  return (
    <div className="logements-container">
      {logements.map((logement, index) => (
        <Logement
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
          firstInRow={index % 3 === 0}
        />
      ))}
    </div>
  );
};

export default logementsData;

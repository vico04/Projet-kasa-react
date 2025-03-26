import logements from '../data/logements.json';
import Logement from './Logement'; //On importe le composant Logement

const logementsData = () => {
  //Creation d'une div et classe pour chaque sous tableau
  return (
    <div className="logements-container">
      {logements.map((logement) => (
        <Logement key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
      ))}
    </div>
  );
};

export default logementsData;

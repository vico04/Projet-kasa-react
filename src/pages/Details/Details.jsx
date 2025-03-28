import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import logements from '../../data/logements.json'; // Import du fichier JSON
import Carrousel from '../../components/Carrousel/Carrousel'; // Import du carrousel
import Collapse from '../../components/Collapse/Collapse';
import '../../pages/Details/Details.scss';
import NotFound from '../NotFound/NotFound';

const Details = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const logement = logements.find((logement) => logement.id === id); // Trouve le logement correspondant
  if (!logement) {
    return <NotFound />; // Sécurité si l'ID est invalide
  }

  return (
    <div className="details-container">
      <Carrousel images={logement.pictures} /> {/* Passe les images au carrousel */}
      <div className="informations-container">
        <div className="title-location">
          <h1>{logement.title}</h1>
          {/* Localisation */}
          <p className="location">{logement.location}</p>
          {/* Tags */}
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <div key={'tag-' + index} className="box">
                <span className="tag">{tag}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="host-rating">
          {/* Hôte */}
          <div className="host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
          </div>
          {/* Note (étoiles) */}
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={'starIcon-' + index}
                icon={faStar}
                className={index < logement.rating ? 'completed' : 'empty'}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="description-equipt">
        {/* Collapse pour Description */}
        <Collapse title="Description" content={logement.description}></Collapse>
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equipement, index) => (
                <p key={'equipement-' + index}>{equipement}</p>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Details;

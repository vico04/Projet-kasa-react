import '../components/Card/Card.scss';
import { Link } from 'react-router-dom';

const Logement = ({ id, title, cover, firstInRow }) => {
  //On Redirige vers "/details/id" + ajout d'un curseur
  return (
    <Link
      to={`/details/${id}`}
      className={`card-container ${firstInRow ? 'first-in-row' : ''}`}
      style={{ cursor: 'pointer' }}
    >
      <img src={cover} alt={title} className="logement-image" />
      <p className="logement-title">{title}</p>
    </Link>
  );
};

export default Logement;

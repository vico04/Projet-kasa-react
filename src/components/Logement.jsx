import '../components/Card/Card.scss';
import { Link } from 'react-router-dom';
import Card from './Card/Card';

const Logement = ({ id, title, cover }) => {
  return (
    <Link to={`/details/${id}`} style={{ cursor: 'pointer', textDecoration: 'none' }} className="cardLink">
      <Card title={title} cover={cover} className="card-container" />
    </Link>
  );
};

export default Logement;

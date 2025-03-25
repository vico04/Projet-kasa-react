import { Link } from 'react-router-dom';
import '../../pages/NotFound/NotFound.scss';

const NotFound = () => {
  return (
    <div className="error-container">
      <h1 className="errorNumber">404</h1>
      <p className="errorText">
        Oups! La page que <br className="mobile-form" />
        vous demandez n'existe pas.
      </p>
      <Link to="/" className="errorBack">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default NotFound;

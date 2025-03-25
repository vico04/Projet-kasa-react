import '../Card/Card.scss';

const Card = ({ title, cover }) => {
  return (
    <div className="card-container">
      <img src={cover} alt={title} className="logement-image" />
      <h3 className="logement-title">{title}</h3>
    </div>
  );
};

export default Card;

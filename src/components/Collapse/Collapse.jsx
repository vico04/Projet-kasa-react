import { useState } from 'react';
import '../../components/Collapse/Collapse.scss';

const Collapse = ({ title, content }) => {
  //variable initale en false donc fermée
  const [isOpen, setIsOpen] = useState(false);

  //Mise en place de la div global + paramétrage au clique
  return (
    <div className="collapse-box">
      <div className="collapse">
        <h3>{title}</h3>
        <div className="arrow-box">
          <span
            className={`material-icons arrow ${isOpen ? 'turn' : ''}`}
            onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
          >
            keyboard_arrow_up
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="collapse-content appear scale-in-ver-top">
          <div className="collapse-text"> {content} </div>
        </div>
      )}
    </div>
  );
};

export default Collapse;

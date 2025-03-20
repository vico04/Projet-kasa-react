import { useState } from 'react';
import '../../components/Carrousel/Carrousel.scss';

const Carrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // État pour suivre l'image affichée

  const nextImage = () => {
    setCurrentIndex((presentIndex) => (presentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((presentIndex) => (presentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carrousel">
      <button className="previous" onClick={prevImage}>
        <span className="material-icons left">arrow_back_ios</span>
      </button>
      <button className="next" onClick={nextImage}>
        <span className="material-icons right">arrow_forward_ios</span>
      </button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <div className="photo-number">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default Carrousel;

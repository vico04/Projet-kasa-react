import '../../components/Banner/Banner.scss';

//fonction qui va attendre deux props
const Banner = ({ image, text }) => {
  return (
    <section className="banner" style={{ backgroundImage: `url(${image})` }}>
      {text && <h1 className="banner-text">{text}</h1>}
    </section>
  );
};

export default Banner;

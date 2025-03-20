import Banner from '../../components/Banner/Banner';
import imageBanner from '../../assets/images/image-banniere.webp';
import LogementsData from '../../components/LogementsData';

const Home = () => {
  return (
    <div>
      <Banner
        image={imageBanner}
        text={
          <>
            Chez vous,
            <br className="mobileTxt-Banner" /> partout et ailleurs
          </>
        }
      />
      <LogementsData />
    </div>
  );
};

export default Home;

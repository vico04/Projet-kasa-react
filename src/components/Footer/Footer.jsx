import '../../components/Footer/Footer.scss';
import Logo2 from '../../assets/images/logo2.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerLogoContainer">
        <img src={Logo2} alt="Logo" className="footer-logo" />
      </div>
      <div className="footerTextContainer">
        <p className="footer-text">©2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

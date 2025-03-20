import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

// const Layout = ({ children }) => {
//   return (
//     <div className="main-container">
//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </div>
//   );
// };

const Layout = () => {
  console.log('Layout chargé');

  return (
    <div className="Layout">
      <div className="main-container">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

import Logo from '../Logo';
import NavMenu from './NavMenu';

const DeskNavBar = () => {
  return (
    <div className="navbar">
      <Logo text="RentCars" classText="logo-text" />
      <NavMenu className="navbar-links" />
    </div>
  );
};

export default DeskNavBar;

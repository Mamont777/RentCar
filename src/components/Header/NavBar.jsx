import { useToggle } from '../../shared/hooks/useToggle';
import MobileNavBar from './MobileNavBar';
import icons from '../../assets/images/icons.svg';
import DeskNavBar from './DeskNavBar';
import Logo from '../Logo';
import Button from '../Button';

const NavBar = () => {
  const { isOpen, toggle } = useToggle(false);

  return (
    <nav>
      <MobileNavBar icons={icons} navbar={isOpen} openNav={toggle} />
      <DeskNavBar />
      <div className="mobile-hamb" onClick={toggle}>
        <Logo text="RentCars" classText="logo-text" />
        <Button
          svgClass="mobile-navbar-menu"
          iconURL="#icon-menu"
          araiaLabel="menu"
        />
      </div>
    </nav>
  );
};

export default NavBar;

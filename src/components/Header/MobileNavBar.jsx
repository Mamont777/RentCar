import PropTypes from 'prop-types';
import Button from '../Button';
import NavMenu from './NavMenu';

const MobileNavBar = ({ navbar, openNav }) => {
  return (
    <div
      className={`mobile-navbar dark:bg-slate-900 ${navbar ? 'open-nav' : ''}`}
    >
      <Button
        onClick={openNav}
        svgClass="mobile-navbar-close"
        iconURL="#icon-close"
        aria-label="close"
      />
      <NavMenu closeNav={openNav} className="mobile-navbar-items" />
    </div>
  );
};

MobileNavBar.propTypes = {
  navbar: PropTypes.bool,
  openNav: PropTypes.func,
};

export default MobileNavBar;

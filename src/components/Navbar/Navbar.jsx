import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="/">Home</Link></li>
        <li className="p__opensans"><Link to="/food_menu">Menu</Link></li>
        <li className="p__opensans"><Link to="/about_us">About</Link></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><Link to="/conduct">Contact</Link></li>
      </ul>
      <div className="app__navbar-login">
        <Link to="/signup" className="p__opensans">Log In / Registration</Link>
        <div />
        <Link to="/book_table" className="p__opensans">Book Table</Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><Link to="/" onClick={() => setToggleMenu(false)}>Home</Link></li>
              <li><Link to="/food_menu" onClick={() => setToggleMenu(false)}>Menu</Link></li>
              <li><Link to="/about_us" onClick={() => setToggleMenu(false)}>About</Link></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><Link to="/conduct" onClick={() => setToggleMenu(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

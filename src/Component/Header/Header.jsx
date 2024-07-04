import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../Asset/logo.png';
import './Header.css';

function Header() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className="header">
        {/* Logo Section */}
        <div id="header_logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Navigation Menu */}
        <div id="header__menu">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active-nav' : 'unactive-nav')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Men" className={({ isActive }) => (isActive ? 'active-nav' : 'unactive-nav')}>
              Men's
            </NavLink>
          </li>
          <li>
            <NavLink to="/Women" className={({ isActive }) => (isActive ? 'active-nav' : 'unactive-nav')}>
              Women's
            </NavLink>
          </li>
          <li>
            <NavLink to="/Shop" className={({ isActive }) => (isActive ? 'active-nav' : 'unactive-nav')}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className={({ isActive }) => (isActive ? 'active-nav' : 'unactive-nav')}>
              Contact
            </NavLink>
          </li>
        </div>

        {/* Right Widget Section */}
        <div id="header__right-widget">
          <div id="login-button">
            <button>
              <Link to="/Login">Login</Link>
            </button>
          </div>
          <div className="cart-img">
            <div id="card-tip">5</div>
            <Link to="/Cart">
              <img src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843__340.png" alt="Cart" />
            </Link>
          </div>
          <div id="side-bar" onClick={toggleSidebar}>
            <img src="https://icon-library.com/images/sidebar-icon/sidebar-icon-17.jpg" alt="sidebar" />
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      {isSidebarVisible && (
        <div className="second-header-menu-items">
          <div id="side-bar-Header">
            <div id='logo-slider'><img src={logo} alt="Logo" /></div>
            <div id='cross-slider'> <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/640px-Flat_cross_icon.svg.png"
              alt="cross"
              onClick={toggleSidebar}
            /></div>
          </div>
          <div id="header_menu_sidebar">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active-nav' : 'unactive-nav')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Men" className={({ isActive }) => (isActive ? 'active-nav' : 'unactive-nav')}>
                Men's
              </NavLink>
            </li>
            <li>
              <NavLink to="/Women" className={({ isActive }) => (isActive ? 'active-nav' : 'unactive-nav')}>
                Women's
              </NavLink>
            </li>
            <li>
              <NavLink to="/Shop" className={({ isActive }) => (isActive ? 'active-nav' : 'unactive-nav')}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className={({ isActive }) => (isActive ? 'active-nav' : 'unactive-nav')}>
                Contact
              </NavLink>
            </li>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;

import React from 'react';
import '../Header/Header.css';

function Header() {
  return (
    <header className="header__container">
      <div className="header__logo"></div>
      <div className="header__searchform">
        <div className="header__searchform-icon"></div>
        <input
          className="header__searchform-input"
          type="text"
          placeholder="Enter GitHub username"
        ></input>
      </div>
    </header>
  );
}

export default Header;
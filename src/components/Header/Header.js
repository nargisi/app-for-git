import '../Header/Header.css';

function Header({ onKeyDown, value, onChange }) {
  return (
    <header className="header__container">
      <div className="header__logo"></div>
      <div className="header__searchform">
        <div className="header__searchform-icon"></div>
        <input
          className="header__searchform-input"
          type="text"
          placeholder="Enter GitHub username"
          onKeyDown={onKeyDown}
          value={value}
          onChange={onChange}
        ></input>
      </div>
    </header>
  );
}

export default Header;

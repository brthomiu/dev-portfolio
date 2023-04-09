const Header = () => {
  return (
    <nav className="header">
      <div className="header--left">
        <a href={"#about"}>About</a>
        <a href={"#projects"}>Projects</a>
        <a href={"#contact"}>Contact</a>
      </div>
      <div className="header--right">
        <a>Brad Thompson - 2023</a>
      </div>
    </nav>
  );
};

export default Header;

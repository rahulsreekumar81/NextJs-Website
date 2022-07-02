import Button from "../Button/Button";
const Header = () => {
  return (
    <nav className="nav__container">
      <div className="nav__logo">LOGO</div>
      <ul className="nav__links">Home</ul>
      <ul className="nav__links">Explore</ul>
      <div className="nav__actions">
        <Button button_title="Get Started" />
      </div>
    </nav>
  );
};
export default Header;

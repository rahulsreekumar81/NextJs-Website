import Button from "../Button/Button";
import Image from "next/image";
const Header = () => {
  return (
    <header>
      <Image src="/assets\images\LOGO.png" alt="logo" layout="fill" />
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <a href="" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__list-item">
            <a href="" className="nav__link">
              Explore
            </a>
          </li>
          <li className="nav__list-item">
            <Button button_text="Get Started" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

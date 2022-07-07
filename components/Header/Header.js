import styles from "../../styles/Header.module.css";
import Button from "../Button/Button";
import Image from "next/image";
import LOGO from "/assets/images/LOGO.png";
const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={LOGO} alt="logo" height={100} width={100} />
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__listitem}>
            <a href="#" className="nav__link">
              Home
            </a>
          </li>
          <li className={styles.nav__listitem}>
            <a href="#" className={styles.nav__link}>
              Explore
            </a>
          </li>
          <li className={styles.nav__listitem}>
            <Button button_text="Get Started" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

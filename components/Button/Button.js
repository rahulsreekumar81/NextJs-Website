import styles from "../../styles/Button.module.css";
const Button = ({ button_text, icon }) => {
  return <button className={styles.button}>{button_text}</button>;
};

export default Button;

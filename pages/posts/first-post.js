import Link from "next/link";
import styles from "/styles/Home.module.css";
const FirstPost = () => {
  return (
    <>
      <h1 className={styles.title}>First Post</h1>
      <h2 className={styles.description}>
        <Link href="/">
          <a>Go back to Home</a>
        </Link>
      </h2>
    </>
  );
};
export default FirstPost;

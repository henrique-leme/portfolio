import styles from "./style.module.css";

export const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.title}>
    <h1> Portfolio </h1>
  </div>
  <div>
    <ul className={styles.navigation}>
    <li><a href=""></a>Home</li>
    <li><a href=""></a>About me</li>
    <li><a href=""></a>Projects</li>
    <li><a href=""></a>Contact</li>
  </ul>
  </div>

  </nav>
);

};

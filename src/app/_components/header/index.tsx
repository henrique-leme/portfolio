import styles from "./style.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div >
        <h1> Portfolio </h1>
      </div>
      <div >
        <h2>Home</h2>
        <h2>About me</h2>
        <h2>Projects</h2>
        <h2>Contact</h2>
      </div>
    </div>
  );
};

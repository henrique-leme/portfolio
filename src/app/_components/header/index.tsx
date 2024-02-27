import styles from "./style.module.css"

export const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.title}>
        <h1> Portfolio </h1>
      </div>
      <div>
        <ul className={styles.navigation}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">About me</a>
          </li>
          <li>
            <a href="#home">Projects</a>
          </li>
          <li>
            <a href="#home">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

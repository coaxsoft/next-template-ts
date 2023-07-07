// assets
import styles from "../assets/styles/pages/home.module.scss";

export default function HomePage() {
  return (
    <div className={styles["home-page"]} data-testid="home-page">
      <h1>Home Page</h1>
    </div>
  );
}

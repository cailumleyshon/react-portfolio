import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <section className={styles.container}>
      <img
        src={getImageUrl("hero/avatar.png")}
        alt="Hero Image"
        className={styles.heroImg}
      />
      <div className={styles.welcome}>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.name}>Cailum</span>
        </h1>
        <p className={styles.bio}>I'm a full-stack developer ...</p>
        <a className={styles.contact} href="mailto:cailumleyshon@gmail.com">
          Contact me
        </a>
      </div>
      <div className={styles.top}></div>
      <div className={styles.bottom}></div>
    </section>
  );
}

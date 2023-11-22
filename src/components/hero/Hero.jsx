import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/fontawesome-free-brands";

export default function Hero() {
  return (
    <section className={styles.container}>
      <img
        src={getImageUrl("./assets/avatar.png")}
        alt="Hero Image"
        className={styles.heroImg}
      />
      <div className={styles.welcome}>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.name}>Cailum</span>
        </h1>
        <p className={styles.bio}>
          I'm a Junior full-stack developer with an{" "}
          <span className={styles.eyeBlink}>eye</span> for design and a passion
          for creating interesting web applications that bridge the gap between
          functionality and aesthetics.
        </p>
        <div className={styles.links}>
          <FontAwesomeIcon
            onClick={() =>
              (window.location.href = "mailto:cailumleyshon@gmail.com")
            }
            className={styles.icon + " " + styles.emailIcon}
            icon={faEnvelopeOpen}
            style={{ color: "#d1610b" }}
          />
          <FontAwesomeIcon
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/cailum-leyshon-05965923b")
            }
            className={styles.icon}
            icon={faLinkedin}
            style={{ color: "#d1610b" }}
          />
          <FontAwesomeIcon
            onClick={() =>
              (window.location.href = "https://github.com/cailumleyshon")
            }
            className={styles.icon}
            icon={faGithub}
            style={{ color: "#d1610b" }}
          />
        </div>
      </div>
      <div className={styles.top}></div>
      <div className={styles.bottom}></div>
    </section>
  );
}

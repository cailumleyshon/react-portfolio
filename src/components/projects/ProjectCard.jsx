import styles from "./ProjectCard.module.css";
import { faGithub } from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { getImageUrl } from "../../utils";

export default function ProjectCard({
  project: { title, imageSrc, description, skills, demo, source },
}) {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li className={styles.skill} key={id}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <FontAwesomeIcon
          className={styles.link}
          onClick={() => (window.location.href = demo)}
          icon={faGlobe}
          style={{ color: "#b6550b" }}
        />
        <FontAwesomeIcon
          className={styles.link}
          onClick={() => (window.location.href = source)}
          icon={faGithub}
          style={{ color: "#b6550b" }}
        />
      </div>
    </div>
  );
}

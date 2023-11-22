import styles from "./Experience.module.css";
import techskills from "../../data/techskills.json";
import { getImageUrl } from "../../utils";

export default function Experience() {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Tech Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {techskills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImg}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

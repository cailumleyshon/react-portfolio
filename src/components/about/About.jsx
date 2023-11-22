import img from "/assets/hero/about/comp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faMicrochip,
  faBeerMugEmpty,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <FontAwesomeIcon className={styles.icons} icon={faMicrochip} />
            <div className={styles.aboutItemsText}>
              <h3>Full-Stack Software Developer Intern</h3>
              <h4>Tech Educators</h4>
              <h5>📍 Liverpool</h5>
              <p>
                - Participated in code reviews, design reviews, and daily
                stand-ups to ensure use of industry best practices.
              </p>
              <p>
                {" "}
                - Built several WPAs both independently and with teams of up to
                4 developers.
              </p>
              <p>
                {" "}
                - Learnt an array of technologies, frameworks and libraries to
                contribute to diverse projects and enhance my programming
                skills.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <FontAwesomeIcon
              className={styles.icons}
              icon={faBuildingColumns}
              style={{
                "--fa-primary-color": "#d59320",
                "--fa-secondary-color": "#d59320",
              }}
            />
            <div className={styles.aboutItemsText}>
              <h3>Accounting and Finance</h3>
              <h4>HNC</h4>
              <h5>📍 Liverpool JM University</h5>
              <p>
                - Achieved a HNC learning key modules such as Business and
                Statistics, Economics, Financial Reporting & Corporate
                Governance and Accounting.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <FontAwesomeIcon className={styles.icons} icon={faBeerMugEmpty} />
            <div className={styles.aboutItemsText}>
              <h3>Duty Manager</h3>
              <h4>Pub Invest Group</h4>
              <h5>📍 Liverpool</h5>

              <p>
                - Developed conflict resolution, time-management and leadership
                skills which have proven critical in my subsequent
                opportunities.
                <br />- Managed up to 50 members of staff simultaneously in one
                of the busiest venues in Liverpool.
              </p>
            </div>
          </li>
        </ul>
        <img className={styles.compImg} src={img} alt="Computer Image" />
      </div>
    </section>
  );
}

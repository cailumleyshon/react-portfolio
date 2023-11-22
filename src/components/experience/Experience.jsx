import styles from "./Experience.module.css";
import techskills from "../../data/techskills.json";

export default function Experience() {
  return (
    <section id="experience">
      <h2>Tech Experience</h2>
      <div>
        <div>
          {skills.map((skill, id) => {
            return (
              <div key={id}>
                <div>
                  <img src="" alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul></ul>
      </div>
    </section>
  );
}

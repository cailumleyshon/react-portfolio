import styles from "./Navbar.module.css";
import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggle = (toggled) => {
    setMenuOpen(toggled);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.burger}>
        <a className={styles.title} href="/">
          cailum.dev
          <span className={styles.blinktext}>_</span>
        </a>
        <Hamburger
          className={styles.hamburger}
          rounded
          label="Show Menu"
          size={35}
          duration={0.4}
          color="#4FD1C5"
          easing="ease-in"
          hideOutline={false}
          onToggle={handleToggle}
        />
      </div>
      <div className={styles.menu}>
        <ul
          className={`${styles.menuItems} ${isMenuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">My Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

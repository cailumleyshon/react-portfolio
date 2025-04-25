import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import { Spin as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(window.innerWidth < 830);
  const [hamburgerToggled, setHamburgerToggled] = useState(false);

  const handleToggle = (toggled) => {
    setMenuOpen(toggled);
    setHamburgerToggled(toggled);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
    setHamburgerToggled(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowHamburger(window.innerWidth < 830);
      setMenuOpen(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.burger}>
        <a className={styles.title} href="/">
          <span className={styles.blinktext}>&gt;&nbsp;</span>
          cailum.dev
          <span className={styles.blinktext}>_</span>
        </a>
        {showHamburger && (
          <Hamburger
            className={styles.hamburger}
            rounded
            label="Show Menu"
            size={35}
            duration={0.4}
            color="#ff6d00"
            easing="ease-in"
            hideOutline={false}
            onToggle={handleToggle}
            toggled={hamburgerToggled}
          />
        )}
      </div>
      <div className={styles.menu}>
        <ul
          className={`${styles.menuItems} ${isMenuOpen && styles.menuOpen}`}
          onClick={handleMenuItemClick}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Tech Experience</a>
          </li>
          <li>
            <a href="#projects">My Projects</a>
          </li>
          <li>
            <a href="#contactme">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

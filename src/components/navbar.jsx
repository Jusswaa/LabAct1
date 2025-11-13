import React from "react";
import styles from "./navbar.module.css";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>MyPortfolio</h2>

      <ul className={styles.navLinks}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button onClick={toggleTheme} className={styles.toggleBtn}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default Navbar;

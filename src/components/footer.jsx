// src/components/footer.jsx
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} MyPortfolio. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

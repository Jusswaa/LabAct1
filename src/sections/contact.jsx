// src/sections/contact.jsx
import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <h2>Contact</h2>
      <p>Let’s connect! You can reach me via:</p>
      <p>📧 <a href="mailto:josua.rigodon@gmail.com">josua.rigodon@gmail.com</a></p>
      <p>
        🌐 <a href="https://github.com/Jusswaa" target="_blank" rel="noreferrer">GitHub</a> | 
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer"> LinkedIn</a>
      </p>
    </section>
  );
};

export default Contact;

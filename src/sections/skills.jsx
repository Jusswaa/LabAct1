// src/sections/skills.jsx
import React from "react";
import styles from "./skills.module.css";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "GML", "MySQL", "Git", "GitHub", "Java", "C#", "C++"];

  return (
    <section id="skills" className={styles.section}>
      <h2>Skills</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, i) => (
          <span key={i} className={styles.skillItem}>{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;

// src/sections/projects.jsx
import React from "react";
import styles from "./projects.module.css";

const Projects = () => {
  const projects = [
    { name: "Portfolio Website", desc: "A responsive React portfolio." },
    { name: "Top-Down Endless Game", desc: "Endless top-down game " },
    { name: "2D Platformer Game", desc: "Classic 2D platformer game." }
  ];

  return (
    <section id="projects" className={styles.section}>
      <h2>Projects</h2>
      <div className={styles.container}>
        {projects.map((p, i) => (
          <div key={i} className={styles.card}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

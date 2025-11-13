// src/sections/projects.jsx
import React from "react";
import styles from "./projects.module.css";

const Projects = () => {
  const projects = [
    { name: "Portfolio Website", desc: "A responsive React portfolio." },
    { name: "Task Manager", desc: "A full-stack task app using Node.js." },
    { name: "Weather App", desc: "Shows live weather via OpenWeather API." },
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

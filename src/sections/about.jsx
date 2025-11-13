import React from "react";
import styles from "./about.module.css";
import profilePic from "../assets/profile.jpg"; 
const About = () => {
  return (
    <section id="about" className={styles.section}>
      <h2>About Me</h2>
      <div className={styles.content}>
        <img src={profilePic} alt="Profile" className={styles.profile} />
        <p>
          Hello! I'm <strong>Josua Rigodon</strong>, a passionate and asipring game developer
            with a strong foundation in computer science. I love creating immersive gaming experiences
            that captivate players and push the boundaries of interactive entertainment.
        </p>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="/assets/about/aboutImage.png"
          alt="me with laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <i className="bi bi-cursor" aria-hidden="true"></i>
            <div className={styles.aboutItemText}>
              <h3>* Frontend Developer</h3>
              <p>
                I'm a frontend developer just starting out, eager to learn and grow by building responsive and optimized websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <i class="bi bi-app-indicator"></i>
            <div className={styles.aboutItemText}>
              <h3>Android App Development</h3>
              <p>
                I've developed a few simple beginner apps using Kotlin, and I'm excited to continue learning and building more complex mobile applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
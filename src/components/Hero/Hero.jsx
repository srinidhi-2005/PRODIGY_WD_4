import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey there! I'm Srinidhi</h1>
        <p className={styles.description}>
          I am a passionate front-end web developer with less than a year of experience, specializing in React. 
          I'm driven by the challenge of creating responsive, user-friendly websites and eager to learn and grow my skill set. 
          I enjoy transforming design concepts into functional, interactive web pages.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="/assets/hero/heroImage.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <i className="bi bi-envelope-fill"></i>
          <a href="mailto: marthasrinidhi16@gmail.com">Srinidhi Martha</a>
        </li>
        <li className={styles.link}>
          <i className="bi bi-linkedin"></i>
          <a
            href="https://www.linkedin.com/in/srinidhi-martha-426106301/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/srinidhi-martha
          </a>
        </li>
        <li className={styles.link}>
          <i className="bi bi-github"></i>
          <a
            href="https://github.com/srinidhi-2005"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/srinidhi-2005
          </a>
        </li>
      </ul>
    </footer>
  );
};
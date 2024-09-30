import React from "react";
import styles from "./Footer.module.scss";

function Footer({ scrollRef }) {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.title}>Thanks for your time!</h3>
      <button
        className={styles.btn}
        onClick={() => scrollRef.current.scrollIntoView({ behavior: "smooth" })}
      >
        Up!
      </button>
    </footer>
  );
}

export default Footer;

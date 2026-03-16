import React from "react";
import styles from "./Footer.module.scss";

function Footer({ scrollRef, isScrollable }) {
  if (!isScrollable) return null;

  return (
    <button
      className={styles.btn}
      onClick={() => scrollRef.current.scrollIntoView({ behavior: "smooth" })}
    >
      Up!
    </button>
  );
}

export default Footer;

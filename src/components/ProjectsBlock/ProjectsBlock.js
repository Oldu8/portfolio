import React from "react";
import { projectsArr } from "../../assets/projectsArr.js";
import styles from "./ProjectsBlock.module.scss";

import Card from "./Card/Card";

const ProjectsBlock = () => {
  return (
    <section className={styles.projectsWrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>My projects portfolio</h2>
        <p className={styles.description}>
          I don't have much times for creating projects all the time. But here
          what i've done for last 3-4 years. So, some of them I did for
          interview task or to learn technologies. And only some of them to have
          fun, I think this is most valuable and interesting ones. Im talking
          about extension AdsToArt, GPS calculator and Sea battle board game.
        </p>
        <div className={styles.projectsCards}>
          {projectsArr.map((i) => {
            return <Card item={i} key={i.title} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsBlock;

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
          Before you check I need to say, that I more than a year didn't create
          any valuable project that I want to share, so here some projects that
          I created aside from main job. So you can find something interesting.
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

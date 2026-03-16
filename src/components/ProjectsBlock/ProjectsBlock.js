import React, { useState } from "react";
import { projectsArr } from "../../assets/projectsArr.js";
import styles from "./ProjectsBlock.module.scss";

import Card from "./Card/Card";

const commercialProjects = [
  {
    url: "https://runzy.com",
    name: "Runzy",
    description:
      "A fitness and event platform where users can discover, register for, and manage running events. Built with React, Next.js, and Laravel, featuring registration flows, calendar integration, and admin tools for event organizers.",
  },
  {
    url: "https://marathonguide.com",
    name: "Marathon Guide",
    description:
      "A comprehensive marathon information resource providing race details, schedules, and guides for runners worldwide. Includes SEO optimization and performance improvements for fast discovery of marathon events.",
  },
];

const ProjectsBlock = () => {
  const [activeTab, setActiveTab] = useState("commercial");

  return (
    <section className={styles.projectsWrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>My projects portfolio</h2>
        <div className={styles.toggle}>
          <button
            className={
              activeTab === "commercial"
                ? styles.toggleButtonActive
                : styles.toggleButton
            }
            onClick={() => setActiveTab("commercial")}
          >
            Commercial
          </button>
          <button
            className={
              activeTab === "pet" ? styles.toggleButtonActive : styles.toggleButton
            }
            onClick={() => setActiveTab("pet")}
          >
            Pet Projects
          </button>
        </div>
        {activeTab === "commercial" ? (
          <>
            <p className={styles.disclaimer}>
              I can't share all projects I was working with only public one.
            </p>
            <ul className={styles.commercialList}>
              {commercialProjects.map((project) => (
                <li key={project.url} className={styles.commercialItem}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.commercialLink}
                  >
                    {project.name} — {new URL(project.url).hostname}
                  </a>
                  <p className={styles.commercialDescription}>
                    {project.description}
                  </p>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <p className={styles.description}>
              I don't have much times for creating projects all the time. But
              here what i've done for last 5 years. So, some of them I did for
              interview task or to learn technologies. And only some of them to
              have fun, I think this is most valuable and interesting ones. Im
              talking about extension AdsToArt, GPS calculator and Sea battle
              board game.
            </p>
            <div className={styles.projectsCards}>
              {projectsArr.map((i) => {
                return <Card item={i} key={i.title} />;
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectsBlock;

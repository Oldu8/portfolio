import React from "react";
import avatar from "../../assets/img/avatar.jpg";
import styles from "./HeroBlock.module.scss";

const HeroBlock = () => {
  return (
    <>
      <section id="hero" className={styles.heroWrapper}>
        <div className={styles.content}>
          <hgroup className={styles.headers}>
            <h1 className={styles.title}>Oleh Dudko</h1>
            <h2 className={styles.subTitle}>FrontEnd Developer</h2>
          </hgroup>
          <div className={styles.photoContainer}>
            <img src={avatar} className={styles.img} alt="my avatar"></img>
          </div>
          <p className={styles.description}>
            I'm a Web Developer with 3+ years of experience - specializing in
            creating any kind of projects in web.
            <br />
            I'm ukrainian, currently live in Eastern Europe. Ready to Relocate
            to mostly anywhere.
            <br />
            <br />I am open to full-time and remote Front-End or Full Stack job
            opportunities to gain new coding experience and continue to be
            inspired by the world of web development.
          </p>
        </div>
      </section>
      <section id="about" className={styles.aboutWrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>About Me</h2>
          <ul className={styles.textBlocks}>
            <li className={styles.text}>
              My fascination with web development starts from my marketing job.
              It took me a while to understand that I want to build website
              rather then promote them. So, I took development courses and then
              I have started working as a developer.
            </li>
            <li className={styles.text}>
              Over the past years, I have had the fun and pleaser of working in
              some companies - startups, agencies, and big companies from North
              America and Europe. For now, I am working in Runzy, this is
              inspired startup, where we are trying to create great platform for
              runners from North America.
            </li>
            <li className={styles.text}>
              During this time, I improved knowledge of JavaScript and
              TypeScript, learned how to create SPA apps using React, understood
              how to create simple backend with Node.js and Express or using
              CMS, made a REST API and worked with many other technologies,
              libraries and services. For now I also added PHP and Laravel to
              list of my technologies and develop admin part of Runzy.
            </li>
            <li className={styles.text}>
              Aside from main work, I time to time create personal projects,
              some of them you can see in the projects section. I've already
              build extension, web3 portfolio, blog and admin panel. This is
              actually the thing that keeps me loving coding.
            </li>
            <li className={styles.text}>
              And some personal information aside from professional. I quick
              learner and curious person. So, I interesting in marketing and
              promotion of websites and personal projects. Also, I involved in
              crypto, so I take a part in different crypto projects and working
              with web3.
            </li>
            <li>
              So here are a technologies I've been working with for a while:
              <ul className={styles.skillsList}>
                <li className={styles.group}>
                  Backend:
                  <p className={styles.skill}>PHP</p>
                  <p className={styles.skill}>Laravel 10</p>
                  <p className={styles.skill}>Node / Express</p>
                  <p className={styles.skill}>Nest.js</p>
                </li>
                <li className={styles.group}>
                  Frontend:
                  <p className={styles.skill}>JavaScript</p>
                  <p className={styles.skill}>React</p>
                  <p className={styles.skill}>TypeScript</p>
                  <p className={styles.skill}>Next.js</p>
                  <p className={styles.skill}>Redux</p>
                  <p className={styles.skill}>CSS / SCSS</p>
                  <p className={styles.skill}>HTML5</p>
                </li>
                <li className={styles.group}>
                  Database:
                  <p className={styles.skill}>PostgreSQL</p>
                  <p className={styles.skill}>MySQL</p>
                  <p className={styles.skill}>MongoDB</p>
                </li>
                <li className={styles.group}>
                  Other tools:
                  <p className={styles.skill}>Git</p>
                  <p className={styles.skill}>JEST, Cypress</p>
                  <p className={styles.skill}>Bootstrap / MUI </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default HeroBlock;

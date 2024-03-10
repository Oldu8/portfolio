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
            I'm a Web Developer - specializing in creating responsive websites
            and applications.
            <br />
            I'm ukrainian, currently live in Eastern Europe.
            <br />
            <br />I am open to full-time and remote FrontEnd or FullStack job
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
              My fascination with the web began with, unexpectedly, the work of
              a marketer. It took me a while to understood that I want to build
              website rather then promote them. So in 2018-2019 I took
              development courses and then I have started working as a FrontEnd
              developer.
            </li>
            <li className={styles.text}>
              Over the past 3 years, I have had the fun and pleaser of working
              for several companies, everything started with a practice in small
              crypto startup - Daap developer team, then big outsource company
              Halo Lab, then war and gup without work and I get contract with
              canadian startup Eco4You.
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
              For now, I am working in Runzy, this is inspired startup, where we
              are trying to create great platform for runners from USA and
              Canada. You can check it and use searching and registering tools
              for any event in USA or Canada.
            </li>
            <li className={styles.text}>
              And some personal information aside from professional. I quick
              learner and curious person. So I interesting in marketing and
              promotion of websites and personal projects. Also, I involved in
              crypto, so I take a part in different crypto projects and working
              with cryptocurrencies. And for sure im interesting about youtube,
              how to create videos and make them popular. Maybe someday I will
              share the my content.
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

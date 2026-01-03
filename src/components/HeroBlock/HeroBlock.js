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
            <h2 className={styles.subTitle}>Software Engineer</h2>
          </hgroup>
          <div className={styles.photoContainer}>
            <img src={avatar} className={styles.img} alt="my avatar"></img>
          </div>
          <p className={styles.description}>
            I'm a Full Stack Engineer with 4+ years of experience - specializing
            in creating scalable, user-focused web applications.
            <br />
            I'm ukrainian, currently live in Oviedo, Spain. Open to
            opportunities in Spain or Europe with openness to remote work.
            <br />
            <br />I am open to full-time and remote Full Stack or Software
            Engineer opportunities to gain new coding experience and continue to
            be inspired by the world of web development.
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
              Over the past years, I have had the fun and pleasure of working in
              some companies - startups, agencies, and big companies from North
              America and Europe. Currently, I am working at Growth Minded,
              where I'm building CRM platform with AI-driven funnel generation.
            </li>
            <li className={styles.text}>
              During this time, I improved knowledge of JavaScript and
              TypeScript, learned how to create SPA apps using React and
              Next.js, understood how to create backend with Node.js,
              Express.js, Nest.js, PHP and Laravel, made REST APIs and worked
              with many other technologies, libraries and services. I've also
              worked with SSR, SSG for optimization, Chrome Extensions, and
              various testing frameworks.
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
                  <p className={styles.skill}>Node.js</p>
                  <p className={styles.skill}>Express.js</p>
                  <p className={styles.skill}>Nest.js</p>
                </li>
                <li className={styles.group}>
                  Frontend:
                  <p className={styles.skill}>JavaScript</p>
                  <p className={styles.skill}>TypeScript</p>
                  <p className={styles.skill}>React</p>
                  <p className={styles.skill}>Next.js</p>
                  <p className={styles.skill}>Redux</p>
                  <p className={styles.skill}>SCSS</p>
                  <p className={styles.skill}>MUI</p>
                  <p className={styles.skill}>Tailwind</p>
                  <p className={styles.skill}>HTML5</p>
                  <p className={styles.skill}>Svelte.js</p>
                  <p className={styles.skill}>SvelteKit</p>
                </li>
                <li className={styles.group}>
                  Database:
                  <p className={styles.skill}>SQL</p>
                  <p className={styles.skill}>PostgreSQL</p>
                  <p className={styles.skill}>MongoDB</p>
                </li>
                <li className={styles.group}>
                  Other tools:
                  <p className={styles.skill}>Chrome Extension</p>
                  <p className={styles.skill}>Git</p>
                  <p className={styles.skill}>Jest</p>
                  <p className={styles.skill}>Cypress</p>
                  <p className={styles.skill}>Dusk</p>
                  <p className={styles.skill}>REST API</p>
                  <p className={styles.skill}>Postman</p>
                  <p className={styles.skill}>Insomnia</p>
                  <p className={styles.skill}>Docker</p>
                  <p className={styles.skill}>Figma</p>
                  <p className={styles.skill}>Netlify</p>
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

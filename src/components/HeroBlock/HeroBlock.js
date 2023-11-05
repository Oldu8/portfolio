import React from 'react'
import styles from './HeroBlock.module.scss'
import avatar from "../../assets/img/avatar.jpg"

function HeroBlock() {
    return (
        <>
            <section id='hero' className={styles.heroWrapper}>
                <div className={styles.content}>
                    <hgroup className={styles.headers}>
                        <h1 className={styles.title}>Oleh Dudko</h1>
                        <h2 className={styles.subTitle}>FrontEnd Developer</h2>
                    </hgroup>
                    <div className={styles.photoContainer}>
                        <img src={avatar} className={styles.img} alt='my avatar'></img>
                    </div>
                    <p className={styles.description}>
                        I'm a FrontEnd Developer  -  specializing in creating responsive websites and applications.
                        <br />
                        I was born in Ukraine, but currently I live in Eastern Europe.
                        <br />
                        <br />
                        I am looking for full-time and remote job opportunities to gain new coding experience and continue to be inspired by the world of web development.
                    </p>
                </div>
            </section>
            <section id='about' className={styles.aboutWrapper}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        About Me
                    </h2>
                    <ul className={styles.textBlocks}>
                        <li className={styles.text}>
                            Hello, my name is Oleh and I discovered coding a couple of years ago. My discovery was related to the fact that I can write simple code and these code lines turn into real live sites. Since then, coding has become a part of my life and soon my job.
                        </li>
                        <li className={styles.text}>
                            My fascination with the web began with, unexpectedly, the work of a marketer. It took me a while to understood that I want to build website rather then promote them. So in 2018-2019 I took development courses and then I have started working as a web developer.
                        </li>
                        <li className={styles.text}>
                            Over the past 2 years, I have had the fun and pleasere of working for several companies, everything started from small crypto startup - Daap developer team, then big outsource company Halo Lab, then war and  gup without work and I get contract with canadian startup Eco4You.
                        </li>
                        <li className={styles.text}>
                            During this time, I improved knowledge of JavaScript and TypeScript, learned how to create SPA apps using React, understood how to create simple backend with Node.js and Express or using CMS, made a REST API and worked with many other technologies, libraries and services.
                        </li>
                        <li className={styles.text}>
                            Not the longest way bring me here, creating this portfolio to find the job of my dream. The best option for me is small-medium product company in fin-tech area. I will be happy to find myself in small and friendly development team, creating intresting crypto application.
                        </li>
                        <li>
                            So here are a technologies I've been working with for a while:
                            <ul className={styles.skillsList}>
                                <li className={styles.group}>Backend:
                                    <p className={styles.skill}>Node / Express</p>
                                    <p className={styles.skill}>Nest.js</p>
                                </li>
                                <li className={styles.group}>Frontend:
                                    <p className={styles.skill}>JavaScript</p>
                                    <p className={styles.skill}>React</p>
                                    <p className={styles.skill}>TypeScript</p>
                                    <p className={styles.skill}>Next.js</p>
                                    <p className={styles.skill}>Redux</p>
                                    <p className={styles.skill}>CSS / SCSS</p>
                                    <p className={styles.skill}>HTML5</p>
                                </li>
                                <li className={styles.group}>Database:
                                    <p className={styles.skill}>MongoDB</p>
                                    <p className={styles.skill}>MySQL</p>
                                </li>
                                <li className={styles.group}>Other tools:
                                    <p className={styles.skill}>Git</p>
                                    <p className={styles.skill}>JEST</p>
                                    <p className={styles.skill}>Bootstrap / MUI </p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default HeroBlock
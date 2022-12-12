import React from 'react'
import styles from './AboutBlock.module.scss'

function AboutBlock() {
    return (
        <section id='about' className={styles.aboutWrapper}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    About Me
                </h2>
                <ul className={styles.textBlocks}>
                    <li className={styles.text}>
                        Hello, my name is Oleh and I discovered the Internet again a few years ago. My discovery was related to the fact that I can write code and these code lines turn into real live sites. Since then, coding has become a part of my life and soon my job.
                    </li>
                    <li className={styles.text}>
                        My fascination with the web began with, unexpectedly, the work of a marketer. It took me a while to understood that i want to build website rather then promote them. So in 2018-2019 I took development courses and then I have started working as a web developer.
                    </li>
                    <li className={styles.text}>
                        Over the past 3 years, I have had the fun and pleasere of working for several companies, everything started from BOO.ua, then big outsource company Halo Lab, then war and big gup without work and I get small contract with startup Eco4You. Now I am helping as a volunteer at the position of Frontend Developer at Empowered Futures from AB, Canada and looking for real job opportunity.
                    </li>
                    <li className={styles.text}>
                        During this time, I improved knowledge of JavaScript, learned how to create SPA apps using React, NextJS understood how to create simple backend with Node.js and Express or using CMS, like Sanity and Prismic, made a REST API and worked with many other technologies, libraries and services.
                    </li>
                    <li className={styles.text}>
                        Maybe, You already understood that I'm not a native canadian. Yes, I'm migrant and I came from Ukraine. But don't worry I have work permit for next 3 years, and I don't need a sponsorship.
                    </li>
                    <li>
                        So here are a few technologies I've been working with recently:
                        <ul className={styles.skillsList}>
                            <li className={styles.group}>Backend:
                                <p className={styles.skill}>Node.js / Node Express</p>
                                <p className={styles.skill}>CMS - Sanity, Prismic</p>
                            </li>
                            <li className={styles.group}>Frontend:
                                <p className={styles.skill}>JavaScript (ES6+)</p>
                                <p className={styles.skill}>React</p>
                                <p className={styles.skill}>Next.js</p>
                                <p className={styles.skill}>Redux / Redux TK</p>
                                <p className={styles.skill}>CSS / SCSS</p>
                                <p className={styles.skill}>HTML5</p>
                            </li>
                            <li className={styles.group}>Database:
                                <p className={styles.skill}>REST API / SQL</p>
                                <p className={styles.skill}>MongoDB</p>
                                <p className={styles.skill}>MySQL</p>
                            </li>
                            <li className={styles.group}>Other tools:
                                <p className={styles.skill}>Git</p>
                                <p className={styles.skill}>JEST</p>
                                <p className={styles.skill}>Bootstrap / MUI </p>
                                <p className={styles.skill}>Netlify</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default AboutBlock
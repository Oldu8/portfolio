import React from 'react'
import styles from './HeroBlock.module.scss'
import avatar from "../../assets/img/avatar.png"

function HeroBlock() {
    return (
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
                    FrontEnd Developer, Web Developer, maybe, Software Developer -  specializing in creating responsive websites and applications.
                    <br />
                    Currently living in Ontario, Canada.
                    <br />
                    <br />
                    Also right now, I'm FrontEnd Developer in <a className={styles.heroLink} href='https://www.linkedin.com/company/empowered-futures/' target="_blank" rel="noreferrer">Empowered Futures</a>. Basically, it is a part-time unpaid volunteer job. Of course, volunteer work is cool, but I am looking for full-time and remote job opportunities to gain new coding experience and continue to be inspired by the world of web development.
                    <br />
                    But everything can be discussable, as always in this world.
                </p>
            </div>
        </section>
    )
}

export default HeroBlock
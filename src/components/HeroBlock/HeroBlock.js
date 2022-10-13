import React from 'react'
import styles from './HeroBlock.module.scss'
import avatar from "../../assets/img/avatar.png"

function HeroBlock() {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.content}>
                <hgroup className={styles.headers}>
                    <h1 className={styles.title}>Oleh Dudko</h1>
                    <h2 className={styles.subTitle}>FrontEnd Developer</h2>
                </hgroup>
                <div className={styles.photoContainer}>
                    <img src={avatar} className={styles.img} alt='my avatar'></img>
                </div>
                <p className={styles.description}>
                    FrontEnd developer, Web Developer, maybe Software Developer -  specializing in creating responsive websites and applications.
                    <br />
                    <br />
                    I am currently looking for job opportunities to gain new coding experience and continue to be inspired by the world of web development.
                </p>
            </div>
        </section>
    )
}

export default HeroBlock
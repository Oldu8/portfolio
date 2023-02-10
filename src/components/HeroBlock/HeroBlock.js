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
                    I'm a FrontEnd Developer  -  specializing in creating responsive websites and applications.
                    <br />
                    I was born in Ukraine, but currently I live in Eastern Europe.
                    <br />
                    <br />
                    I am looking for full-time and remote job opportunities to gain new coding experience and continue to be inspired by the world of web development.
                </p>
            </div>
        </section>
    )
}

export default HeroBlock
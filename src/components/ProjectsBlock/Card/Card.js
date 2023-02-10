import React from 'react'
import styles from './Card.module.scss'


function Card({ item }) {
    const { title, img, description, techs, link } = item;

    return (
        <div className={styles.card}>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={img} alt={`${title} screen`} />
            </div>
            <div className={styles.info}>
                <div className={styles.infoText}>
                    <h3 className={styles.subtitle}>
                        {title}
                    </h3>
                    <p className={styles.techList}>
                        {techs}
                    </p>
                    <p className={styles.description}>
                        {description}
                    </p>
                </div>
                <a href={link} target="_blank" rel="noreferrer" className={styles.btnWrapper}>
                    <button className={styles.button}>
                        Check website
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Card
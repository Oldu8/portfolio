import React from 'react'
import styles from './Card.module.scss'


function Card({ title, img, techs }) {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <img className={styles.img} src={img} />
                </div>
                <div className={styles.tooltip}>
                    <p className={styles.tech}>
                        {techs}
                    </p>
                    <button className={styles.tooltipButton}>
                        Learn More
                    </button>
                </div>
            </div>
            <h4 className={styles.title}>
                {title}
            </h4>
        </div>
    )
}

export default Card
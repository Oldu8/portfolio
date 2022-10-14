import React from 'react'
import styles from './Card.module.scss'


function Card({ title, img }) {
    return (
        <div className={styles.card}>
            {/* <div className={styles.tooltip}>
                <button className={styles.tooltipButton}>
                    Learn More
                </button>
            </div> */}
            <div className={styles.imgContainer}>
                <img className={styles.img} src={img} />
            </div>
            <h4 className={styles.title}>
                {title}
            </h4>
        </div>
    )
}

export default Card
import React from 'react'
import styles from './Card.module.scss'


function Card({ title, img, techs, link }) {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <img className={styles.img} src={img} alt={`${title} screen`} />
                </div>
                <div className={styles.tooltip}>
                    <p className={styles.tech}>
                        {techs}
                    </p>
                    <a href={link} target="_blank" rel="noreferrer" className={styles.tooltipBtnWrapper}>
                        <button className={styles.tooltipButton}>
                            Check website
                        </button>
                    </a>
                </div>
            </div>
            <h4 className={styles.title}>
                {title}
            </h4>
        </div>
    )
}

export default Card
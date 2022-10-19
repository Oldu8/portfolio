import React from 'react'
import styles from './Footer.module.scss'

function Footer() {
    return (
        <footer className={styles.footer}>
            <h3 className={styles.title}>Thanks for your time!</h3>
            <a className={styles.btn} href="/#hero">Up!</a>
        </footer>
    )
}

export default Footer
import React from 'react'
import styles from './Header.module.scss'

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.linkLi}>
                        <a href='/#hero' className={styles.link} title='Home'>
                            Home
                        </a>
                    </li>
                    <li className={styles.linkLi}>
                        <a href='/#about' className={styles.link} title='About'>
                            About
                        </a>
                    </li>
                    <li className={styles.linkLi}>
                        <a href='/#projects' className={styles.link} title='Projects'>
                            Projects
                        </a>
                    </li>
                    <li className={styles.linkLi}>
                        <a href='/#cv' className={styles.link} title='CV'>
                            CV
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
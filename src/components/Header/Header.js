import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.linkLi}>
                        <Link to='/' className={styles.link} title='Home'>
                            Home
                        </Link>
                    </li>
                    <li className={styles.linkLi}>
                        <Link to='/projects/' className={styles.link} title='Projects'>
                            Projects
                        </Link>
                    </li>
                    <li className={styles.linkLi}>
                        <Link to='/cv/' className={styles.link} title='CV'>
                            CV
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
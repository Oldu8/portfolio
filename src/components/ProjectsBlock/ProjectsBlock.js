import React from 'react'
import styles from './ProjectsBlock.module.scss'
import YSW from "../../assets/projectsImg/YSW.png"
import DND from "../../assets/projectsImg/DND.png"
import DLT from "../../assets/projectsImg/DLT.png"
import Card from './Card/Card'

const projectsArr = [
    {
        title: 'Driver Licence Test',
        img: DLT,
    },
    {
        title: 'Crypto Portfolio Tracker',
        img: YSW,
    },
    {
        title: 'DnD Film Quiz',
        img: DND,
    },

]

function ProjectsBlock() {
    return (
        <section id='/projects' className={styles.projectsWrapper}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    My projects portfolio
                </h2>
                <p className={styles.description}>
                    These are projects that I did on my own or that I developed with other developers on the team.
                </p>
                <div className={styles.filterPanel}>
                    <button className={styles.filterButton}>
                        My projects
                    </button>
                    <button className={styles.filterButton}>
                        Projects in cooperative
                    </button>
                </div>
                <div className={styles.projectsCards}>
                    {projectsArr.map((i) => {
                        return <Card title={i.title} img={i.img} key={i.title} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default ProjectsBlock
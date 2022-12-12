import React, { useState } from 'react'
import styles from './ProjectsBlock.module.scss'
import { projectsArr } from '../../assets/projectsArr.js'

import Card from './Card/Card'

function ProjectsBlock() {
    const [filter, setFilter] = useState('myProjects');


    return (
        <section id='projects' className={styles.projectsWrapper}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    My projects portfolio
                </h2>
                <p className={styles.description}>
                    These are projects that I did on my own or that I developed with other developers on the team. <br /> Unfortunately, these are not all the projects I have worked on. Some were under NDA, others were internal and I haven't access to them,and I simply did not publish some of my old pet projects on github.
                </p>
                <div className={styles.filterPanel}>
                    <button className={filter === 'myProjects' ? styles.filterButtonActive : styles.filterButton} onClick={() => setFilter('myProjects')}>
                        My projects
                    </button>
                    <button className={filter === 'coopProjects' ? styles.filterButtonActive : styles.filterButton} onClick={() => setFilter('coopProjects')}>
                        Coop projects
                    </button>
                </div>
                <div className={styles.projectsCards}>
                    {projectsArr[filter].map((i) => {
                        return <Card title={i.title} img={i.img} techs={i.techs} key={i.title} link={i.link} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default ProjectsBlock
import React from 'react'
import styles from './CVBlock.module.scss'

const dataWithWorkExpirence = [
    {
        title: 'Frontend Developer',
        company: 'Runzy',
        location: 'Remote, Boston, USA',
        type: 'Full-time',
        date: '03/2023 - present',
        responsibilities: [
            'Conceptualization, evaluation, and implementation of layouts, custom feature development for users. ',
            'Active participation in SCRUM and Waterfall work processes.',
            'Working with Google Analytics events, data processing. Improved pagespeed performance for different pages more than 30-40 points. Working with SEO performance, microdata and accessibility.',
            'Implements different stuff - widgets, scripts, creating emails templates and others. Fixed bugs in different areas of the code - redux, network connections, UI/UX, etc.',
            'Working under creating own UI base, improving code readability and quality, code refactoring and improving performance.',
            'Creating unit tests. Developing interfaces and types for the project, improving components quality and reliability. Code refactore and improving performance.',
            'Working with MUI and Tailwind for making interactive and performant web UIs',
            'Implement design features on wordpress site.',
            'Working with several different APIs like googleAutocomplete, googleMaps. Development UI for calendars and dates.',
        ]
    },
    {
        title: 'Frontend Developer',
        company: 'Eco4you',
        location: 'Remote, ON, Canada',
        type: 'Contract',
        date: '05/2022 - 01/2023',
        responsibilities: [
            'Participation in the development of the architecture of the front-end part of the application. Build application with in Next.js and TypeScript.',
            'Taking a project from initial layout to a full responsive, functioning live site. Created logic for rendering, checking data, sending requests and etc.',
            'Implemented Redux TK to best data and state management, optimizing business logic and porting code.',
            'Implemented the MUI and module styles to speed up development and create modern page design.',
            'Worked with backend team under building the admins panel with NEST.js.',
        ]
    },
    {
        title: 'Junior Frontend Developer',
        company: 'Halo Lab',
        location: 'Hybrid, Ukraine',
        type: 'Full-time',
        date: '10/2021 - 06/2022',
        responsibilities: [
            'Independently wrote 4 projects using React/Redux and other libraries. Singlehandedly wrote an internal project using Sanity CMS + Reac and Next.jst, this allowed to reduce the project development time by more than 30%.',
            ' Participated in pair programming with 3 engineers, and reviewed team’s code to provide additional perspective and catch previously missed errors. Worked in an agile environment with daily and weekly stand-ups and conducted 2 hours of sprint planning and sprint retrospectives per week.',
            'Independently designed and built my own SPA using CoinGecko API and React/Redux TK. Implemented a new API that helps create new services in the project. I implemented a Redux TK instead of Redux on a project, which helped to increase code readability and centralize state data. ',
            'Participated in the development of a large online store, worked in tandem with another developer and tester. He helped develop business logic and render components, set up the state manager, functionality and rendering of components.',
            'Changed the layout, imports types, and implemented a responsible design for a large project. This made it possible to use the application from tablets and 4k monitors and improved loading speed more than 15%.',
        ]
    },
    {
        title: 'Digital Marketing Specialist',
        company: 'Boo.ua',
        location: 'Remote, Ukraine',
        type: 'Full-time',
        date: '05/2020 - 10/2021',
        responsibilities: [
            'Management and optimization of advertising campaigns in different advertising accounts - Facebook, Google, etc.',
            'Creation of reporting, analysis of the received data. Preparation of a project development plan.',
            'Additionally, for the position, I interacted with the development department, wrote some functions and made small changes under the supervision of the frontend team lead.',
            'Management of common marketing activities through several channels, including SEO. Development of a plan for subsidiaries',
            'Meetings with client, manage and plan product development, creating global product strategy.',
        ]
    },
    {
        title: 'Middle PPC Specialist',
        company: 'Netpeak',
        location: 'On-site, Ukraine',
        type: 'Full-time',
        date: '11/2018 - 05/2020',
        responsibilities: [
            'Management of advertising accounts in Google Ads and Facebook and other services to promote goods and services through client sites.',
            'Communication with the manager, setting goals and deadlines, creating reports for the client. Conducting planned trainings and rallies to improve their own skills and those of colleagues.',
            'Installing Google Analytics on the site, setting up goals and conversions to track the effectiveness of advertising campaigns.',
            'Budget management, competitor analysis, search for strengths and weaknesses of competitors. Creation of a promotion strategy based on data analysis from the client. Setting up services, advertising campaigns, ads and optimizing them.',
        ]
    }
]
function CVBlock() {
    return (
        <section id='cv' className={styles.cvWrapper}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    Curriculum Vitae
                </h2>
                <div className={styles.intro}>
                    <p className={styles.description}>
                        Worked somewhere, did something, studied somehow
                        <br />
                        It was a joke.
                    </p>
                    <p className={styles.description}>
                        You can go throught my CV below, download it in PDF format, or check it on <a className={styles.link} target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1nIHmhviUc5SLfasnnJv9JjBu9VCPtQ7i/view?usp=sharing'>Google Drive.</a>
                    </p>
                    <a target="_blank" rel="noreferrer" href='https://drive.google.com/uc?export=download&id=1YmRVc--um9Hnx3_9RGhIatMYGn3TyFj3' download='Dudko CV FrontEnd.pdf' >
                        <button className={styles.downloadBtn}>
                            Download CV
                        </button>
                    </a>
                </div>
                <article className={styles.paper}>
                    <h3 className={styles.cvTitlte}>Oleh Dudko</h3>
                    <h2 className={styles.cvSubTitlte}>Front End Developer</h2>
                    <ul className={styles.contacts}>
                        <li className={styles.unit}>Europe</li>
                        <li className={styles.unit}>dudkoleg@gmail.com</li>
                        <li className={styles.unit}><a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/oldu8/'>Linkedin</a></li>
                        <li className={styles.unit}><a target="_blank" rel="noreferrer" href='https://github.com/Oldu8'>GitHub</a></li>
                    </ul>
                    <h4 className={styles.blockTitle}>Summary</h4>
                    <p className={styles.text}>
                        As a frontend developer with 2+ years of expirience I'm passionate about writing clean and efficient code. I've worked on projects across various industries, including sport sector and finance, that have resulted in improved user experiences and increased business outcomes. Also I have international experience after working in Ukraine, Canada and USA teams.
                        <br />
                        <br />
                        Along with expertise with React and Next I'm growing up my skills in backend field with Node.js And MongoDB to become more flexible developer.  I'm a committed and adaptable developer, always eager to learn and collaborate with others to create innovative solutions.
                        <br />
                    </p>
                    <div className={styles.box}>
                        <h4 className={styles.blockTitle}>Skills</h4>
                        <ul className={styles.skillsList}>
                            <li className={styles.point}>JavaScipt</li>
                            <li className={styles.point}>React</li>
                            <li className={styles.point}>TypeScript</li>
                            <li className={styles.point}>Node.js / Express</li>
                            <li className={styles.point}>Nest.js</li>
                            <li className={styles.point}>Redux / Redux TK</li>
                            <li className={styles.point}>REST API</li>
                            <li className={styles.point}>MongoDB</li>
                            <li className={styles.point}>JEST</li>
                            <li className={styles.point}>CSS / SCSS</li>
                            <li className={styles.point}>HTML5</li>
                            <li className={styles.point}>MUI / Tailwind</li>
                        </ul>
                    </div>
                    <div className={styles.box}>
                        <h4 className={styles.blockTitle}>Work experience</h4>
                        {dataWithWorkExpirence.map((item, index) => (
                            <div className={styles.work}>
                                <div className={styles.workHead}>
                                    <h5 className={styles.h5Title}><strong>{item.title}</strong> - {item.company}
                                    </h5>
                                </div>
                                <div className={styles.workAdd}>
                                    <span className={styles.geo}>{item.location}</span>
                                    <span className={styles.geo}>{item.type}</span>
                                    <span className={styles.period}>{item.date}</span>
                                </div>
                                <ul className={styles.workDesc}>
                                    {item.responsibilities.map((point, index) => (
                                        <li className={styles.point}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className={styles.box}>
                        <h4 className={styles.blockTitle}>Education</h4>
                        <h5 className={styles.edTitle}>
                            <strong>Odesa I.I. Mechnikov National University</strong> Bachelor, Management
                            <ul className={styles.workDesc}>
                                <li className={styles.point}>Major in Marketing and Management with minor in web development and internet marketing.</li>
                            </ul>
                        </h5>
                        <span className={styles.period}>2013 - 2019</span>
                    </div>
                    <div className={styles.box}>
                        <h4 className={styles.blockTitle}>Licence and Certifications </h4>
                        <h5 className={styles.edTitle}>
                            <strong><a href='https://www.linkedin.com/school/ithillel/' target="_blank" rel="noreferrer">Hillel</a></strong> Front End Basic - HTML + CSS
                        </h5>
                        <span className={styles.period}>2019 - 2020</span>
                        <h5 className={styles.edTitle}>
                            <strong><a href='https://www.linkedin.com/school/ithillel/' target="_blank" rel="noreferrer">Hillel</a></strong> Front End PRO - JavaScipt
                        </h5>
                        <span className={styles.period}>2020 - 2020</span>
                        <h5 className={styles.edTitle}>
                            <strong><a href='https://freecodecamp.org/certification/fccb20668db-e7a4-4825-95ae-ce07a42f330f/javascript-algorithms-and-data-structures' target="_blank" rel="noreferrer">freeCodeCamp </a></strong>JavaScript Algorithms and Data Structures
                        </h5>
                        <span className={styles.period}>2022 - 2022</span>
                    </div>
                </article>
            </div >
        </section >
    )
}

export default CVBlock
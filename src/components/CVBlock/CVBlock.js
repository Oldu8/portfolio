import React from 'react'
import styles from './CVBlock.module.scss'

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
                    <a target="_blank" rel="noreferrer" href='https://drive.google.com/uc?export=download&id=1nIHmhviUc5SLfasnnJv9JjBu9VCPtQ7i' download='Dudko CV FrontEnd.pdf' >
                        <button className={styles.downloadBtn}>
                            Download CV
                        </button>
                    </a>
                </div>
                <article className={styles.paper}>
                    <h3 className={styles.cvTitlte}>Oleh Dudko</h3>
                    <h2 className={styles.cvSubTitlte}>Front End Developer</h2>
                    <ul className={styles.contacts}>
                        <li className={styles.unit}>Romania</li>
                        {/* <li className={styles.unit}>+380-97-39-86-178</li> */}
                        <li className={styles.unit}>dudkoleg@gmail.com</li>
                        <li className={styles.unit}><a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/oldu8/'>Linkedin</a></li>
                        <li className={styles.unit}><a target="_blank" rel="noreferrer" href='https://github.com/Oldu8'>GitHub</a></li>
                    </ul>
                    <h4 className={styles.blockTitle}>Summary</h4>
                    <p className={styles.text}>
                        Front-End developer with 2 years of commercial industry experience of working in several different companies
                        from Ukraine and Canada. Have proven ability to effectively collaborate with other developers. I’m Ukrainian, and currently live in Romania, looking for remote / on-stie work opportunities.
                        <br />
                        I have passion for coding so I am
                        open to changing my tech stack, to receive new skills and get awesome experiences. Ready to apply my
                        hardworking personality and talent to develop quality solutions and reach clients expectations.
                        <br />
                    </p>
                    <div className={styles.box}>
                        <h4 className={styles.blockTitle}>Skills</h4>
                        <ul className={styles.skillsList}>
                            <li className={styles.point}>JavaScipt</li>
                            <li className={styles.point}>React / React Hooks</li>
                            <li className={styles.point}>TypeScript</li>
                            <li className={styles.point}>Node.js / Express</li>
                            <li className={styles.point}>Nest.js</li>
                            <li className={styles.point}>Redux / Redux TK</li>
                            <li className={styles.point}>REST API</li>
                            <li className={styles.point}>MongoDB</li>
                            <li className={styles.point}>JEST</li>
                            <li className={styles.point}>CSS / SCSS / SASS</li>
                            <li className={styles.point}>HTML5</li>
                            <li className={styles.point}>Bootstrap / MUI</li>
                            <li className={styles.point}>Git / GitHub</li>
                        </ul>
                    </div>
                    <div className={styles.box}>
                        <h4 className={styles.blockTitle}>Work experience</h4>
                        <div className={styles.work}>
                            <div className={styles.workHead}>
                                <h5 className={styles.h5Title}><strong>Frontend Developer</strong> - Eco4You
                                </h5>
                            </div>
                            <div className={styles.workAdd}>
                                <span className={styles.geo}>Remote, ON, Canada</span>
                                <span className={styles.geo}>Type: Contract</span>
                                <span className={styles.period}>07/2022 - 02/2023</span>
                            </div>
                            <ul className={styles.workDesc}>
                                <li className={styles.point}>Participation in the development of the architecture of the front-end part of the application. Wrote the main components of the application in React, Next and TS.</li>
                                <li className={styles.point}>Taking a project from initial layout to a full responsive, functioning live site. Created functions for rendering, checking data, sending requests and business logic. Code review.</li>
                                <li className={styles.point}>Development of the entire user interface, work with animation. Installing Redux state management, optimizing business logic and porting code.</li>
                                <li className={styles.point}>Implemented the MUI and module styles to speed up development and create modern page design.</li>
                                <li className={styles.point}>Worked with the authorization process for the app, development of the admin’s panel and functionality.</li>
                                <li className={styles.point}>Worked with legacy code, transferred project’s components to TypeScript. I was engaged in the creation of unit tests and code coverage.</li>
                                <li className={styles.point}>Created and developed REST API for the app with Node.js / Nest.js and MongoDB.</li>
                            </ul>
                        </div>
                        <div className={styles.work}>
                            <div className={styles.workHead}>
                                <h5 className={styles.h5Title}><strong>FrontEnd Developer</strong> - <a a href='https://www.linkedin.com/company/empowered-futures/' target="_blank" rel="noreferrer">Empowered Futures</a>
                                </h5>
                            </div>
                            <div className={styles.workAdd}>
                                <span className={styles.geo}>Remote, AB, Canada</span>
                                <span className={styles.geo}>Type: Volunteer job</span>
                                <span className={styles.period}>10/2022 - 01/2023</span>
                            </div>
                            <ul className={styles.workDesc}>
                                <li className={styles.point}>Maintained, reviewed and adjusted code. Debugging and performance measurement.</li>
                                <li className={styles.point}>Developed mobile and web application using TypeScript, incorporating new features, animations, analytics
                                    and improving user experience. Participated in meetings and stand ups and worked on a sprint.</li>
                                <li className={styles.point}>Wrote functions and hooks with React to create functionality according to the figma. Improved the
                                    readability of the code and increased its performance.</li>
                            </ul>
                        </div>
                        <div className={styles.work}>
                            <div className={styles.workHead}>
                                <h5 className={styles.h5Title}><strong>Junior Front End Developer</strong> - <a a href='https://www.linkedin.com/company/halolabteam/' target="_blank" rel="noreferrer">Halo Lab</a>
                                </h5>
                            </div>
                            <div className={styles.workAdd}>
                                <span className={styles.geo}>Remote, Ukraine</span>
                                <span className={styles.geo}>Type: Full time</span>
                                <span className={styles.period}>11/2021 - 06/2022</span>
                            </div>
                            <ul className={styles.workDesc}>
                                <li className={styles.point}>Independently wrote 4 projects using React/Redux and other libraries. Singlehandedly wrote an internal project using Sanity CMS + React and Next.js, this allowed to reduce the project development time by more than 30%</li>
                                <li className={styles.point}>Participated in pair programming with 3 engineers, and reviewed team’s code to provide additional perspective and catch previously missed errors. Worked in an agile environment with daily and weekly stand-ups and conducted 2 hours of sprint planning and sprint retrospectives per week.</li>
                                <li className={styles.point}>Independently designed and built my own SPA using CoinGecko API and React/Redux TK. Implemented a new API that helps create new services in the project. I implemented a Redux TK instead of Redux on a project, which helped to increase code readability and centralize state data.</li>
                                <li className={styles.point}>Participated in the development of a large online store, worked in tandem with another developer and tester. He helped develop business logic and render components, set up the state manager, functionality and rendering of components.</li>
                                <li className={styles.point}>Changed the layout, imports types, and implemented a responsible design for a large project. This made it possible to use the application from tablets and 4k monitors and improved loading speed more than 15%.</li>
                            </ul>
                        </div>
                        <div className={styles.work}>
                            <div className={styles.workHead}>
                                <h5 className={styles.h5Title}><strong>Junior Front End Developer</strong> - Daap developer team
                                </h5>
                            </div>
                            <div className={styles.workAdd}>
                                <span className={styles.geo}>On-site, Ukraine</span>
                                <span className={styles.geo}>Type: Full time</span>
                                <span className={styles.period}>05/2021 - 11/2021</span>
                            </div>
                            <ul className={styles.workDesc}>
                                <li className={styles.point}>UI development  for a platform in web3. Refinement and creation of new layout according to the figma.</li>
                                <li className={styles.point}>Working with the API, creating separate components and functionality for data processing.</li>
                                <li className={styles.point}>Created visualization with graphs and bars based on API data, the development of functionality for the converter and data processing.</li>
                                <li className={styles.point}>Working with Redux for processing, saving data on client and server side</li>
                                <li className={styles.point}>Interaction with developers and testers, training along with the team leader on the project.</li>
                            </ul>
                        </div>
                        <div className={styles.work}>
                            <div className={styles.workHead}>
                                <h5 className={styles.h5Title}><strong>Middle Internet Marketer</strong> - Boo.ua
                                </h5>
                            </div>
                            <div className={styles.workAdd}>
                                <span className={styles.geo}>Remote, Ukraine</span>
                                <span className={styles.geo}>Type: Full time</span>
                                <span className={styles.period}>04/2020 - 05/2021</span>
                            </div>
                            <ul className={styles.workDesc}>
                                <li className={styles.point}>Management and optimization of advertising campaigns in different advertising accounts - Facebook, Google, etc.</li>
                                <li className={styles.point}>Creation of reporting, analysis of the received data. Preparation of a project development plan.</li>
                                <li className={styles.point}>Additionally, for the position, I interacted with the development department, wrote some functions and made small changes under the supervision of the frontend team lead.</li>
                                <li className={styles.point}>Management of common marketing activities through several channels, including SEO. Development of a plan for subsidiaries</li>
                                <li className={styles.point}>Meetings with client, manage and plan product development, creating global product strategy.</li>
                            </ul>
                        </div>
                        <div className={styles.work}>
                            <div className={styles.workHead}>
                                <h5 className={styles.h5Title}><strong>
                                    Junior Internet Marketer</strong> - <a a href='https://www.linkedin.com/company/netpeak/' target="_blank" rel="noreferrer">Netpeak</a>
                                </h5>
                            </div>
                            <div className={styles.workAdd}>
                                <span className={styles.geo}>On-site, Ukraine</span>
                                <span className={styles.geo}>Type: Full time</span>
                                <span className={styles.period}>11/2018 - 03/2020</span>
                            </div>
                            <ul className={styles.workDesc}>
                                <li className={styles.point}>Management of advertising accounts in Google Ads and Facebook and other services to promote goods and services through client sites.</li>
                                <li className={styles.point}>Communication with the manager, setting goals and deadlines, creating reports for the client. Conducting planned trainings and rallies to improve their own skills and those of colleagues.</li>
                                <li className={styles.point}>Installing Google Analytics on the site, setting up goals and conversions to track the effectiveness of advertising campaigns.</li>
                                <li className={styles.point}>Budget management, competitor analysis, search for strengths and weaknesses of competitors. Creation of a promotion strategy based on data analysis from the client. Setting up services, advertising campaigns, ads and optimizing them.</li>
                            </ul>
                        </div>
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
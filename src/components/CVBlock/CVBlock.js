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
                        You can go throught my CV below, download it in PDF format, or check it on <a className={styles.link} target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1Y_TG6GMz-MlJC7y6TcwWLbnSm44d3d-G/view?usp=sharing'>Google Drive.</a>
                    </p>
                    <a target="_blank" rel="noreferrer" href='https://drive.google.com/uc?export=download&id=1YJQsov-FjmNrJAD6FxGVBhFlf8R4zE3W' download='Dudko CV FrontEnd.pdf' >
                        <button className={styles.downloadBtn}>
                            Download CV
                        </button>
                    </a>
                </div>
                <article className={styles.paper}>
                    <h3 className={styles.cvTitlte}>Oleh Dudko</h3>
                    <h2 className={styles.cvSubTitlte}>Front End Developer</h2>
                    <ul className={styles.contacts}>
                        <li className={styles.unit}>Toronto, ON</li>
                        <li className={styles.unit}>416-500-0815</li>
                        <li className={styles.unit}>o.dudko.ca@gmail.com</li>
                        <li className={styles.unit}><a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/olehdudkoca/'>Linkedin</a></li>
                        <li className={styles.unit}><a target="_blank" rel="noreferrer" href='https://github.com/Oldu8'>GitHub</a></li>
                    </ul>
                    <h4 className={styles.blockTitle}>Summary</h4>
                    <p className={styles.text}>
                        Front-End developer with 3 years of commercial industry experience of working for a large outsourcing
                        company and proven ability to effectively collaborate with other developers. I have passion for coding so I am
                        open to changing my tech stack, to receive new skills and get awesome experiences. Ready to apply my
                        hardworking personality and talent to develop quality solutions and reach clients expectations.
                        <br />
                        Has work permit in Canada and don't require sponsorship.
                    </p>
                    <div className={styles.box}>
                        <h4 className={styles.blockTitle}>Skills</h4>
                        <ul className={styles.skillsList}>
                            <li className={styles.point}>JavaScipt</li>
                            <li className={styles.point}>React / React Hooks</li>
                            <li className={styles.point}>NextJS</li>
                            <li className={styles.point}>Node.js / Express</li>
                            <li className={styles.point}>REST API</li>
                            <li className={styles.point}>MongoDB</li>
                            <li className={styles.point}>JEST</li>
                            <li className={styles.point}>Redux / Redux TK</li>
                            <li className={styles.point}>CSS / SCSS / SASS</li>
                            <li className={styles.point}>Bootstrap / MUI</li>
                            <li className={styles.point}>HTML5</li>
                            <li className={styles.point}>Git / GitHub</li>
                        </ul>
                    </div>
                    <div className={styles.box}>
                        <h4 className={styles.blockTitle}>Work experience</h4>
                        <div className={styles.work}>
                            <div className={styles.workHead}>
                                <h5 className={styles.h5Title}><strong>FrontEnd Developer</strong> - <a a href='https://www.linkedin.com/company/empowered-futures/' target="_blank" rel="noreferrer">Empowered Futures</a>
                                </h5>
                            </div>
                            <div className={styles.workAdd}>
                                <span className={styles.geo}>Remote, AB, Canada</span>
                                <span className={styles.geo}>Type: Volunteer job</span>
                                <span className={styles.period}>10/2022 - 12/2022</span>
                            </div>
                            <ul className={styles.workDesc}>
                                <li className={styles.point}>Maintained, reviewed and/or adjusted code and architecture. Debugging, performance measurement, and test-driven development.</li>
                                <li className={styles.point}>Offered creative and efficient solutions to challenges that arise in clients projects. Participated in meetings and stand ups and worked on a sprint.</li>
                                <li className={styles.point}>Wrote functions and hooks to create functionality according to the client's template. Improved the readability of the code and increased its performance through optimization.</li>
                            </ul>
                        </div>
                        <div className={styles.work}>
                            <div className={styles.workHead}>
                                <h5 className={styles.h5Title}><strong>Web Developer</strong> - Eco4You
                                </h5>
                            </div>
                            <div className={styles.workAdd}>
                                <span className={styles.geo}>Remote, ON, Canada</span>
                                <span className={styles.geo}>Type: Contract</span>
                                <span className={styles.period}>08/2022 - 12/2022</span>
                            </div>
                            <ul className={styles.workDesc}>
                                <li className={styles.point}>Worked on web development projects as assigned, taking a project from initial layout to a full responsive, functioning live site. Created functions for rendering, checking data, sending requests and business logic on the project. Performed cross-browser testing JEST and optimization.</li>
                                <li className={styles.point}>Developed SPA to improve the convenience speed of the application and allow users to update the quiz questions interface without reloading. Implemented Redux TK.Created business logic for data processing.</li>
                                <li className={styles.point}>Implemented the MUI and module styles to speed up development and create modern page design.</li>
                                <li className={styles.point}>Created REST API for app with Node.js and MongoDB. Developed a simple backend with Express.</li>
                            </ul>
                        </div>
                        <div className={styles.work}>
                            <div className={styles.workHead}>
                                <h5 className={styles.h5Title}><strong>Front End Developer</strong> - <a a href='https://www.linkedin.com/company/halolabteam/' target="_blank" rel="noreferrer">Halo Lab</a>
                                </h5>
                            </div>
                            <div className={styles.workAdd}>
                                <span className={styles.geo}>Remote, Ukraine</span>
                                <span className={styles.geo}>Type: Full time</span>
                                <span className={styles.period}>11/2021 - 06/2022</span>
                            </div>
                            <ul className={styles.workDesc}>
                                <li className={styles.point}>Independently wrote 5 projects using React/Redux and other libraries. Singlehandedly wrote an internal project using Sanity CMS + React, this allowed to reduce the project development time by more than 40%.</li>
                                <li className={styles.point}>Participated in pair programming with 3 engineers, and reviewed team???s code to provide additional perspective and catch previously missed errors. Worked in an agile environment with daily and weekly stand-ups and conducted 2 hours of sprint planning and sprint retrospectives per week.</li>
                                <li className={styles.point}>Independently designed and built my own SPA using CoinGecko API and React/Redux TK. Implemented a new API that helps create new services in the project. I implemented a Redux TK instead of Redux on a project, which helped to increase code readability and centralize state data. </li>
                                <li className={styles.point}>Developed and implemented routing for the project, created multi-page applications. Simplified and isolated business logic for a large project, improved code quality.</li>
                            </ul>
                        </div>
                        <div className={styles.work}>
                            <div className={styles.workHead}>
                                <h5 className={styles.h5Title}><strong>Web Developer</strong> - <a a href='https://www.linkedin.com/company/booua/' target="_blank" rel="noreferrer">BOO.UA</a>
                                </h5>
                            </div>
                            <div className={styles.workAdd}>
                                <span className={styles.geo}>Remote, Ukraine</span>
                                <span className={styles.geo}>Type: Full time</span>
                                <span className={styles.period}>05/2020 - 11/2021</span>
                            </div>
                            <ul className={styles.workDesc}>
                                <li className={styles.point}>Established user-friendly design, optimized pages with goods, cart page, check-out page, resulting in increased 20% user clicks and growth in 12% for adding products to cart. Added scripts of Google Analytics and other services to the project. Diagnosed and troubleshooting daily problems with a team.</li>
                                <li className={styles.point}>Developed new pages with new categories using React. Worked with multi pages in NodeJS for updating routing and generating new pages.support and maintenance of the website in high seasons. </li>
                                <li className={styles.point}>Provided technical support to client via phone, zoom, or other platforms. Agile methodology. Provided SEO practice while building new pages and categories. Advised on the administration of the site.</li>
                            </ul>
                        </div>
                        <div className={styles.work}>
                            <div className={styles.workHead}>
                                <h5 className={styles.h5Title}><strong>
                                    Internet Marketer</strong> - <a a href='https://www.linkedin.com/company/netpeak/' target="_blank" rel="noreferrer">Netpeak</a>
                                </h5>
                            </div>
                            <div className={styles.workAdd}>
                                <span className={styles.geo}>On-site, Ukraine</span>
                                <span className={styles.geo}>Type: Full time</span>
                                <span className={styles.period}>11/2018 - 05/2020</span>
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
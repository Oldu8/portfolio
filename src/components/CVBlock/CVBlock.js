import React from "react";
import styles from "./CVBlock.module.scss";

const dataWithWorkExperience = [
  {
    title: "Software Engineer",
    company: "Growth Minded",
    location: "Remote, Alexandria, VA, USA",
    type: "Full-time",
    date: "06/2025 - Present",
    responsibilities: [
      "Created a custom HubSpot CRM extension with Express.js backend (Vercel) to process deal data and return file links for built documents, based on type and data from deal.",
      "Built admin panel and app for AI-driven funnel generation: collected user data, combined it with prompts, and generated personalized output.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "Runzy",
    location: "Remote, Boston, MA, USA",
    type: "Full-time",
    date: "03/2023 - 06/2025",
    responsibilities: [
      "Worked with SSR, SSG for optimization page speed load. Optimized page speed performance by 30-40 points through strategic SEO improvements, microdata implementation, and fine-tuning.",
      "Developed dynamic, responsive layouts and custom features for Next.js, and TypeScript applications.",
      "Implemented scalable UI/UX features using Material-UI and Tailwind, delivering high-performance UI.",
      "Boosted code quality and maintainability through refactoring and testing with Jest, Cypress on frontend and dusk on Backend. Made unit and feature tests.",
      "Architected new backend features and extended existing entities using Laravel 10 and PostgreSQL, ensuring seamless integration with APIs and admin panel enhancements.",
      "Delivered e2e feature development, seamlessly handling both frontend and backend tasks independently.",
      "Built features on backend - migrations, model extensions, authentication and api improvements.",
      "Led agile sprints as Scrum Master, conducted thorough code reviews, and contributed to hiring processes to build high-performing teams.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Eco4you",
    location: "On-site, ON, Canada",
    type: "Contract",
    date: "08/2022 - 01/2023",
    responsibilities: [
      "Played a key role in shaping the architecture of the front-end segment of the application, utilizing Next.js and TypeScript to build a robust foundation.",
      "Led the entire project lifecycle, transforming initial layouts into fully responsive and functional live sites. Developed intricate logic for rendering, form data validation, and managing requests to ensure seamless user experiences.",
      "Implemented Redux Toolkit to optimize data and state management, enhancing business logic and facilitating code portability.",
      "Employed Material-UI (MUI) and modular styles to accelerate development processes and create contemporary page designs, showcasing a commitment to efficiency and modern aesthetics.",
      "Collaborated with the backend team in constructing the admin panel using NEST.js. Extended business logic to calculate user results and organized questions data, reducing frontend load and significantly improving page speed.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company: "Halo Lab",
    location: "Hybrid, Ukraine",
    type: "Full-time",
    date: "10/2021 - 06/2022",
    responsibilities: [
      "Independently wrote 4 projects using React/Redux and other libraries. Singlehandedly wrote an internal project using Sanity CMS + React and Next.js, this allowed to reduce the project development time by more than 30%.",
      "Participated in pair programming with 3 engineers, and reviewed team’s code to provide additional perspective and catch previously missed errors. Worked in an agile environment with daily and weekly stand-ups and conducted 2 hours of sprint planning and sprint retrospectives per week.",
      "Independently designed and built my own SPA using CoinGecko API and React/Redux TK. Implemented a new API that helps create new services in the project. I implemented a Redux TK instead of Redux on a project, which helped to increase code readability and centralize state data. ",
      "Participated in the development of a large online store, worked in tandem with another developer and tester. He helped develop business logic and render components, set up the state manager, functionality and rendering of components.",
      "Changed the layout, imports types, and implemented a responsible design for a large project. This made it possible to use the application from tablets and 4k monitors and improved loading speed more than 15%.",
    ],
  },
  {
    title: "Digital Marketing Specialist",
    company: "NDA",
    location: "Remote, Ukraine",
    type: "Full-time",
    date: "05/2020 - 10/2021",
    responsibilities: [
      "Management and optimization of advertising campaigns in different advertising accounts - Facebook, Google, etc.",
      "Creation of reporting, analysis of the received data. Preparation of a project development plan.",
      "Additionally, for the position, I interacted with the development department, wrote some functions and made small changes under the supervision of the frontend team lead.",
      "Management of common marketing activities through several channels, including SEO. Development of a plan for subsidiaries",
      "Meetings with client, manage and plan product development, creating global product strategy.",
    ],
  },
  {
    title: "Middle PPC Specialist",
    company: "Netpeak",
    location: "On-site, Ukraine",
    type: "Full-time",
    date: "11/2018 - 05/2020",
    responsibilities: [
      "Management of advertising accounts in Google Ads and Facebook and other services to promote goods and services through client sites.",
      "Communication with the manager, setting goals and deadlines, creating reports for the client. Conducting planned trainings and rallies to improve their own skills and those of colleagues.",
      "Installing Google Analytics on the site, setting up goals and conversions to track the effectiveness of advertising campaigns.",
      "Budget management, competitor analysis, search for strengths and weaknesses of competitors. Creation of a promotion strategy based on data analysis from the client. Setting up services, advertising campaigns, ads and optimizing them.",
    ],
  },
];

const CVBlock = () => {
  return (
    <section id="cv" className={styles.cvWrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>Curriculum Vitae</h2>
        <div className={styles.intro}>
          <p className={styles.description}>
            Worked somewhere, did something, studied somehow
            <br />
            It was a joke.
          </p>
          <p className={styles.description}>
            You can go through my CV below, download it in PDF format, or check
            it on{" "}
            <a
              className={styles.link}
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1zERp8NFyzVkS3QZBZP8JgMPqWEBHYUG6/view?usp=sharing"
            >
              Google Drive.
            </a>
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/uc?export=download&id=1zERp8NFyzVkS3QZBZP8JgMPqWEBHYUG6"
            download="Dudko CV Full Stack.pdf"
          >
            <button className={styles.downloadBtn}>Download CV</button>
          </a>
        </div>
        <article className={styles.paper}>
          <h3 className={styles.cvTitlte}>Oleh Dudko</h3>
          <h2 className={styles.cvSubTitlte}>Software Engineer</h2>
          <ul className={styles.contacts}>
            <li className={styles.unit}>Oviedo, Spain</li>
            <li className={styles.unit}>dudkoleg@gmail.com</li>
            <li className={styles.unit}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/oldu8/"
              >
                Linkedin
              </a>
            </li>
            <li className={styles.unit}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Oldu8"
              >
                GitHub
              </a>
            </li>
          </ul>
          <h4 className={styles.blockTitle}>Summary</h4>
          <p className={styles.text}>
            Highly motivated Full Stack Engineer with 4 years of experience
            specializing in web development using React, Next.js, and
            TypeScript, complemented by backend expertise in PHP, Laravel, and
            Node.js, Express.js. Skilled in delivering scalable, user-focused
            solutions within agile environments. Proactive and detail-oriented,
            with a background in marketing - SEO, PPC. Seeking exciting
            opportunities in Spain or Europe with openness to remote work.
            <br />
          </p>
          <div className={styles.box}>
            <h4 className={styles.blockTitle}>Skills</h4>
            <ul className={styles.skillsList}>
              <li className={styles.point}>
                Front-end: React, Next.js, Redux, JavaScript, TypeScript, SCSS,
                MUI, Tailwind, HTML5
              </li>
              <li className={styles.point}>
                Back-end: PHP, Laravel 10, Node.js, Nest.js, Express.js
              </li>
              <li className={styles.point}>
                Other technologies: Chrome Extension, Svelte.js, SvelteKit
              </li>
              <li className={styles.point}>
                DataBase: SQL, PostgreSQL, MongoDB
              </li>
              <li className={styles.point}>Testing: Jest, Cypress, Dusk</li>
              <li className={styles.point}>
                Tools: Netlify, REST API, Git, Postman, Insomnia, Docker, Figma
              </li>
              <li className={styles.point}>
                Foreign languages: English - proficiency, Ukrainian - native,
                Russian - native, Spanish - elementary
              </li>
            </ul>
          </div>
          <div className={styles.box}>
            <h4 className={styles.blockTitle}>Work experience</h4>
            {dataWithWorkExperience.map((item) => (
              <div className={styles.work} key={item.company}>
                <div className={styles.workHead}>
                  <h5 className={styles.h5Title}>
                    <strong>{item.title}</strong> - {item.company}
                  </h5>
                </div>
                <div className={styles.workAdd}>
                  <span className={styles.geo}>{item.location}</span>
                  <span className={styles.geo}>{item.type}</span>
                  <span className={styles.period}>{item.date}</span>
                </div>
                <ul className={styles.workDesc}>
                  {item.responsibilities.map((point, index) => (
                    <li className={styles.point} key={index}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.box}>
            <h4 className={styles.blockTitle}>Education</h4>
            <h5 className={styles.edTitle}>
              <strong>Odessa Mechnikov National University</strong> Master,
              Management
              <ul className={styles.workDesc}>
                <li className={styles.point}>
                  Major in Marketing and Management with minor in web
                  development and internet marketing.
                </li>
              </ul>
            </h5>
            <span className={styles.period}>09/2013 - 12/2019</span>
          </div>
          <div className={styles.box}>
            <h4 className={styles.blockTitle}>Licence and Certifications </h4>
            <h5 className={styles.edTitle}>
              <strong>
                <a
                  href="https://www.linkedin.com/school/ithillel/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hillel
                </a>
              </strong>{" "}
              Front End Basic - HTML + CSS
            </h5>
            <span className={styles.period}>2019 - 2020</span>
            <h5 className={styles.edTitle}>
              <strong>
                <a
                  href="https://www.linkedin.com/school/ithillel/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hillel
                </a>
              </strong>{" "}
              Front End PRO - JavaScipt
            </h5>
            <span className={styles.period}>2020 - 2020</span>
            <h5 className={styles.edTitle}>
              <strong>
                <a
                  href="https://freecodecamp.org/certification/fccb20668db-e7a4-4825-95ae-ce07a42f330f/javascript-algorithms-and-data-structures"
                  target="_blank"
                  rel="noreferrer"
                >
                  freeCodeCamp{" "}
                </a>
              </strong>
              JavaScript Algorithms and Data Structures
            </h5>
            <span className={styles.period}>2022 - 2022</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CVBlock;

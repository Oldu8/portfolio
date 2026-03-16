import React from "react";
import styles from "./CVBlock.module.scss";

const dataWithWorkExperience = [
  {
    title: "Software Engineer",
    company: "Growth Minded",
    location: "Alexandria, Virginia, United States · Remote",
    type: "Full-time",
    date: "Jun 2025 - Present",
    responsibilities: [
      "Created a registration funnel with payment methods using GraphQL, TypeScript, and Next.js. Deployed a working project in less than three months using Cursor.",
      "Built a backend service that aggregates data from Klaviyo and Boulevard CRM systems, stores it in a DB, processes it, and executes cron jobs for various business logic. Complete backend service development on Node.js, Express.js, PostgreSQL, Prisma, and deployment to Vercel.",
      "Developed a custom HubSpot Extension + Backend Integration that fetches deal data, sends it to a custom Express.js backend (deployed on Vercel), and returns a link to a dynamically generated file stored on the server.",
      "Implemented full Google Enhanced Ecommerce tracking in a Ruby on Rails project, including product views, add-to-cart, and transaction events — with complete setup both in code and GA4.",
      "Involved in creating small and medium-sized projects from scratch, architecture planning, and connecting various API services including Stripe, Sentry, and Google Maps API. Focused on developing project security and error handling through services.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "Runzy",
    location: "Boston, Massachusetts, United States · Remote",
    type: "Full-time",
    date: "Feb 2024 - Jun 2025",
    responsibilities: [
      "Implemented new UI features and developed robust business logic for the registration module using React and Next.js. Conducted code refactoring to enhance project scalability, maintainability, and code readability.",
      "Initiated and executed standalone projects and pages using TypeScript, incorporating a data management system with Redux Toolkit.",
      "Wrote tests with Cypress to ensure code quality and improve page loading speed. Collaborated with colleagues to enhance overall user experience through bug-fixing processes.",
      "Enhanced UI/UX for the admin panel, streamlining event flow control for business partners using Laravel 10. Incorporated key features to support business operations effectively.",
      "Implemented new features by extending database tables with PostgreSQL and updating corresponding routes for seamless integration.",
      "Developed new functionalities by creating server-side logic and calculations with PHP, following the MVC pattern for efficient code organization.",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Runzy",
    location: "Boston, Massachusetts, United States · Remote",
    type: "Full-time",
    date: "Mar 2023 - Feb 2024",
    responsibilities: [
      "Conceptualized, evaluated, and implemented layouts and custom feature development for users. Active participation in agile work processes.",
      "Worked with Google Analytics events and data processing. Improved Pagespeed performance for different pages by more than 30-40 points. Worked with SEO performance, microdata, and accessibility.",
      "Implemented different features like widgets, scripts, email templates, and others. Fixed bugs in different areas including Redux, network connections, UI/UX.",
      "Worked on creating an internal UI base, improving code readability and quality, code refactoring, and improving performance.",
      "Created unit tests with Jest. Built the system for end-to-end (e2e) tests with Cypress.",
      "Worked with MUI and Tailwind for making interactive and performant web UIs with React.js.",
      "Worked with several APIs including Google Autocomplete and Google Maps. Developed UI with calendars and dates.",
      "Developed interfaces and types for the project, improving components quality and reliability. Worked on creating a reliable build.",
      "Built several brand new websites for different component purposes. Created a web version of the application with full functional authorization, calendar, and CRUD events.",
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
            Full Stack Engineer with 5 years of experience specializing
            in Frontend development with React and Next.js. I build modern web
            applications, integrations, and internal tools with a strong focus
            on performance and scalability.
          </p>
          <p className={styles.description}>
            You can go through my CV below, download it in PDF format, or check
            it on{" "}
            <a
              className={styles.link}
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1E4cXhtyNirXbDm8e48uOi5VAddkXBaLN/view?usp=sharing"
            >
              Google Drive.
            </a>
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/uc?export=download&id=1E4cXhtyNirXbDm8e48uOi5VAddkXBaLN"
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
            I have experience building small and medium-sized products from
            scratch, designing system architecture, integrating external APIs,
            and developing both frontend and backend services. I enjoy working
            at the intersection of engineering, product, and growth, building
            systems that combine solid software engineering with business
            impact.
            <br />
          </p>
          <div className={styles.box}>
            <h4 className={styles.blockTitle}>Skills</h4>
            <ul className={styles.skillsList}>
              <li className={styles.point}>
                <strong>Core Technologies:</strong> JavaScript / TypeScript,
                React / Next.js, Node.js / Express, PHP / Laravel, PostgreSQL /
                Prisma / MongoDB, Redux Toolkit / RTK Query / Zustand
              </li>
              <li className={styles.point}>
                <strong>Frontend Development:</strong> React & Next.js
                applications, performance optimization and PageSpeed
                improvements, SEO, accessibility, and microdata, UI development
                with MUI and Tailwind, testing with Jest and Cypress
              </li>
              <li className={styles.point}>
                <strong>Backend & Integrations:</strong> REST API development
                and backend services, CRM and third-party integrations, cron
                jobs and data processing services, deployment and serverless
                platforms (Vercel)
              </li>
              <li className={styles.point}>
                <strong>Platforms & APIs:</strong> Stripe (payments & billing),
                HubSpot CRM (custom extensions & integrations), Klaviyo and
                Boulevard CRM, Google Maps / Google Autocomplete API, Google
                Analytics / GA4 / Enhanced Ecommerce
              </li>
              <li className={styles.point}>
                <strong>Observability & Reliability:</strong> Error monitoring
                with Sentry, logging, debugging, and production monitoring,
                secure API integrations and error handling
              </li>
              <li className={styles.point}>
                <strong>Foreign languages:</strong> English - proficiency,
                Ukrainian - native, Russian - native, Spanish - elementary
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

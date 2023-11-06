import YSW from "./projectsImg/YSW.png"
import DND from "./projectsImg/DND.png"
import DLT from "./projectsImg/DLT.png"
import GPS from "./projectsImg/GPS.png"
import Grocery from "./projectsImg/Grocery.png"
import Colors from "./projectsImg/Colors.png"
import SC from "./projectsImg/SC.png"
import SeaBattle from "./projectsImg/SeaBattle.png"




export const projectsArr = [
    {
        title: 'Driver Licence App',
        img: DLT,
        description: "This is a my own project that I created with the pretension to bring it to commercial release. The website already has functional to try teoretical driver tests, and save your results in local storage. Additionally, I plan to develop an admin panel, the possibility of registration and authorization. Here I am improving my frontend skills and learning how to create a backend. The site works on my own API, which I created in Node.js and MongoDB.",
        techs: 'React, Redux TK, Node.js, MongoDB, API, MUI, JEST',
        link: 'https://driver-licence-test.netlify.app/'
    },
    {
        title: 'Crypto Portfolio Tracker',
        img: YSW,
        description: "It's my personal project, which I have completely invented and implemented by myself. This project has quite a lot of business logic and complex functions for processing, transferring, editing data. I take the data from the open API CoinGecko.",
        techs: 'React, TypeScript, Redux TK, API, MUI, JEST',
        link: 'https://your-simple-wallet.netlify.app/'
    },
    {
        title: 'Sea battle board game',
        img: SeaBattle,
        description: "This is the hardest test I've ever done. It was hard to come up with an implementation of the placement of ships so that there were the right number of them and they did not touch. It turned out even to implement in the OOP approach.",
        techs: 'React, TypeScript, CSS',
        link: 'https://storied-sunshine-3146fc.netlify.app/'
    },
    {
        title: 'Random Colors',
        img: Colors,
        description: "Simple app that allow you to randomly generate colors and lock color that you like to create unique variations of color.",
        techs: 'Vanila JS, Chromo',
        link: 'https://rad-rolypoly-0823dd.netlify.app/'
    },
    {
        title: 'Storage Calculator',
        img: SC,
        description: "One of test task that I did. Just a calculator that works with unlimited number of objects. The difficulty in creating was in the layering and several conditions for creating an API and a Chart.js.",
        techs: 'TypeScript, Chart.js, JEST, SCSS',
        link: 'https://silver-bavarois-9ea460.netlify.app/'
    },
    {
        title: 'Simple quiz games',
        img: DND,
        description: "This is a project that includes 2 games. One is guessing the release order of films from various sagas, such as Star Wars or The Lord of the Rings. The second game is guessing the color according to the proposed option in HEX format. I did the first one to test React's drag and drop feature, and the second one because I liked the task and wanted to try implementing it.",
        techs: 'React, TypeScript, Bootstrap, DnD',
        link: 'https://amazing-puffpuff-3c8167.netlify.app/'
    },
    {
        title: 'GPS Calculator',
        img: GPS,
        description: "This is my first test job that I did for my first job. This is a calculator that allows you to calculate the distance between two points. The format for entering coordinates that can be taken from google maps. Implemented using an open API from Google Maps.",
        techs: 'Vanila JS, SCSS, Google Maps API',
        link: 'https://courageous-cat-57032b.netlify.app/'
    },
    {
        title: 'Grocery Shop',
        img: Grocery,
        description: "This is also one of my test items. A simplified version of the online store. Here I improved my skills with data sorting and filters. Also made a modern validation for the input data.",
        techs: 'React, JS, SCSS, API',
        link: 'https://stellar-seahorse-2dc3d4.netlify.app/'
    },
]
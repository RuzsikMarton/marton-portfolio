import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          navbar: {
            about: "About",
            projects: "Projects",
            contact: "Contact",
          },
          language: {
            heading: "Language",
            english: "English",
            slovak: "Slovak",
            hungarian: "Hungarian",
          },
          hero: {
            title:
              "Hello, I'm <br/><1>{{firstName}}</1> <br/><1>{{lastName}}</1>",
            motto:
              "Junior Full-Stack Developer | Focused on learning, building, and delivering",
            cv: "Download CV",
            contact: "Contact Me",
          },
          about: {
            age: "Age",
            experience: "Years of Experience",
            projects: "Projects worked on",
            deployed: "Projects deployed",
            education: "Education",
          },
          highSchool: {
            title: "High School",
            degree: "High School Diploma - Electrical Engineering",
            institution:
              "Spojená škola, Komárňanská 28, Nové Zámky (Secondary Industrial School of Electrical Engineering S. A. Jedlika)",
            year: "Sep 1, 2014 - Jun, 2018",
          },
          bsc: {
            title: "Bsc - University",
            degree:
              "BSc in Computer Science - Faculty of Economics and Informatics",
            institution: "J. Selye University, Komárno",
            year: "Sep, 2020 - Jun, 2023",
          },
          msc: {
            title: "Msc - University",
            degree:
              "MSc in Computer Science - Faculty of Economics and Informatics",
            institution: "J. Selye University, Komárno",
            year: "Sep, 2023 - Jun, 2025",
          },
          contact: {
            heading: "Get in Touch",
            description:
              "I'm currently exploring new opportunities — let's connect if you think I'd be a great fit for your team or project.",
            name: "Name",
            content: "Content",
            message: "Your message...",
            send: "Send Email",
            sending: "Sending...",
            success: "Message sent successfully!",
          },
          tech: {
            other: "Miscellaneous",
            future: "Learning / Want to Learn",
          },
          projects: {
            heading: "Some of my latest work",
            details: "Click for details",
            link: "View Project",
            close: "Close",
            list: [
              {
                id: 1,
                name: "Social Media App",
                description:
                  "A full-stack social media application built for learning purposes. Built with modern web technologies, featuring real-time interactions, user authentication, and modern UI design.",
                techStack: [
                  "js",
                  "react",
                  "tailwindcss",
                  "nodejs",
                  "expressjs",
                  "mysql",
                ],
                techDetails: [
                  "Javascript",
                  "React",
                  "React Router",
                  "TanStack Query",
                  "Node.js",
                  "Express",
                  "MySQL",
                ],
                link: "https://github.com/RuzsikMarton/social-app-react-node",
                img: "/social-app.png",
              },
              {
                id: 2,
                name: "Weather Dashboard",
                description:
                  "A small full-stack weather app built with React, Express, and the Open-Meteo API. It shows current weather and a 7-day forecast for selected cities or search results.",
                techStack: [
                  "js",
                  "react",
                  "tailwindcss",
                  "nodejs",
                  "expressjs",
                ],
                techDetails: [
                  "Javascript",
                  "React",
                  "React Router",
                  "Node.js",
                  "Express",
                  "Open-Meteo API",
                ],
                link: "https://github.com/RuzsikMarton/weather-dashboard-react",
                img: "/weather.png",
              },
              {
                id: 3,
                name: "Bachelor Thesis Project",
                description:
                  "A full-stack ski platform built with React and Node.js/Express as part of a bachelor’s thesis. The app features authentication, user interaction, and ski-related data visualization with a modern UI.",
                techStack: [
                  "js",
                  "react",
                  "bootstrap5",
                  "nodejs",
                  "expressjs",
                  "mongodb",
                ],
                techDetails: [
                  "Javascript",
                  "React",
                  "Redux",
                  "React Router",
                  "React Bootstrap",
                  "Node.js",
                  "Express",
                  "MongoDB",
                ],
                link: "https://github.com/RuzsikMarton/ski-bachelor-thesis",
                img: "/bc.png",
              },
              {
                id: 4,
                name: "matrixvis - JS Library",
                description:
                  "MatrixVis is a JavaScript library designed for creating interactive algorithm visualizations using matrices. It simplifies the process of demonstrating matrix-based algorithms, making it a perfect tool for educators, students, and developers.",
                techStack: ["js"],
                techDetails: ["Javascript"],
                link: "https://github.com/RuzsikMarton/javascript-library-matrixalgorithm",
                img: "/mgr.png",
              },
            ],
          },
        },
      },
      sk: {
        translation: {
          navbar: {
            about: "O mne",
            projects: "Projekty",
            contact: "Kontakt",
          },
          language: {
            heading: "Jazyk",
            english: "Angličtina",
            slovak: "Slovenčina",
            hungarian: "Maďarčina",
          },
          hero: {
            title:
              "Ahoj, som <br/><1>{{firstName}}</1> <br/><1>{{lastName}}</1>",
            motto:
              "Junior Full-Stack Developer | Zameriavam sa na učenie, tvorbu a realizáciu",
            cv: "Stiahnuť CV",
            contact: "Kontaktujte ma",
          },
          about: {
            age: "Vek",
            experience: "Roky skúseností",
            projects: "Projekty na ktorých som pracoval",
            deployed: "Nasadené projekty",
            education: "Vzdelanie",
          },
          highSchool: {
            title: "Stredná škola",
            degree: "Stredoškolský diplom - Elektrotechnika",
            institution:
              "Spojená škola, Komárňanská 28, Nové Zámky (Stredná priemyselná škola elektrotechnická S. A. Jedlika)",
            year: "Sep 1, 2014 - Jun, 2018",
          },
          bsc: {
            title: "Bc. - Univerzita",
            degree:
              "Bc - Aplikovaná informatika, Fakulta ekonómie a informatiky",
            institution: "Univerzita J. Selyeho, Komárno",
            year: "Sep, 2020 - Jun, 2023",
          },
          msc: {
            title: "Mgr. - Univerzita",
            degree:
              "Mgr - Aplikovaná informatika, Fakulta ekonómie a informatiky",
            institution: "Univerzita J. Selyeho, Komárno",
            year: "Sep, 2023 - Jun, 2025",
          },
          contact: {
            heading: "Kontaktujte ma",
            description:
              "Aktuálne hľadám nové príležitosti — kontaktujte ma, ak si myslíte, že by som bol pre váš tím alebo projekt vhodný.",
            name: "Meno",
            content: "Obsah",
            message: "Vaša správa...",
            send: "Odoslať email",
            sending: "Odosielanie...",
            success: "Správa bola úspešne odoslaná!",
          },
          tech: {
            other: "Ostatné",
            future: "Učím sa / Chcem sa naučiť",
          },
          projects: {
            heading: "Niektoré z mojich najnovších prác",
            details: "Kliknite pre viac",
            link: "Zobraziť projekt",
            close: "Zavrieť",
            list: [
              {
                id: 1,
                name: "Social Media App",
                description:
                  "Kompletná (full-stack) sociálna sieť vytvorená na vzdelávacie účely. Postavená pomocou moderných webových technológií, ponúka interakcie v reálnom čase, autentifikáciu používateľov a moderný dizajn používateľského rozhrania.",
                techStack: [
                  "js",
                  "react",
                  "tailwindcss",
                  "nodejs",
                  "expressjs",
                  "mysql",
                ],
                techDetails: [
                  "Javascript",
                  "React",
                  "React Router",
                  "TanStack Query",
                  "Node.js",
                  "Express",
                  "MySQL",
                ],
                link: "https://github.com/RuzsikMarton/social-app-react-node",
                img: "/social-app.png",
              },
              {
                id: 2,
                name: "Weather Dashboard",
                description:
                  "Malá, full-stack aplikácia o počasí vytvorená pomocou React, Express a Open-Meteo API. Zobrazuje aktuálne počasie a 7-dňovú predpoveď pre vybrané mestá alebo výsledky vyhľadávania.",
                techStack: [
                  "js",
                  "react",
                  "tailwindcss",
                  "nodejs",
                  "expressjs",
                ],
                techDetails: [
                  "Javascript",
                  "React",
                  "React Router",
                  "Node.js",
                  "Express",
                  "Open-Meteo API",
                ],
                link: "https://github.com/RuzsikMarton/weather-dashboard-react",
                img: "/weather.png",
              },
              {
                id: 3,
                name: "Bakalársky projekt",
                description:
                  "Kompletná (full-stack) lyžiarska platforma vytvorená pomocou Reactu a Node.js/Express ako súčasť bakalárskej práce. Aplikácia obsahuje autentifikáciu, interakciu používateľov a vizualizáciu údajov súvisiacich s lyžovaním s moderným používateľským rozhraním.",
                techStack: [
                  "js",
                  "react",
                  "bootstrap5",
                  "nodejs",
                  "expressjs",
                  "mongodb",
                ],
                techDetails: [
                  "Javascript",
                  "React",
                  "Redux",
                  "React Router",
                  "React Bootstrap",
                  "Node.js",
                  "Express",
                  "MongoDB",
                ],
                link: "https://github.com/RuzsikMarton/ski-bachelor-thesis",
                img: "/bc.png",
              },
              {
                id: 4,
                name: "matrixvis - JS Knižnica",
                description:
                  "MatrixVis je knižnica v jazyku JavaScript určená na tvorbu interaktívnych vizualizácií algoritmov pomocou matíc. Zjednodušuje proces demonštrácie algoritmov založených na maticiach, vďaka čomu je ideálnym nástrojom pre učiteľov, študentov a vývojárov.",
                techStack: ["js"],
                techDetails: ["Javascript"],
                link: "https://github.com/RuzsikMarton/javascript-library-matrixalgorithm",
                img: "/mgr.png",
              },
            ],
          },
        },
      },
      hu: {
        translation: {
          navbar: {
            about: "Rólam",
            projects: "Projektek",
            contact: "Kapcsolat",
          },
          language: {
            heading: "Nyelv",
            english: "Angol",
            slovak: "Szlovák",
            hungarian: "Magyar",
          },
          hero: {
            title:
              "Szia, <br/><1>{{lastName}}</1> <br/><1>{{firstName}}</1> vagyok",
            motto:
              "Junior Full-Stack Fejlesztő | Fókuszban a tanulás, az építés és a megvalósítás",
            cv: "CV letöltése",
            contact: "Lépjen kapcsolatba velem",
          },
          about: {
            age: "Életkor",
            experience: "Tapasztalat évei",
            projects: "Projektek, amelyeken dolgoztam",
            deployed: "Közzétett projektek",
            education: "Tanulmányok",
          },
          highSchool: {
            title: "Középiskola",
            degree:
              "Középiskolai bizonyítvány - Villamosmérnöki - Informatikai szakirány",
            institution:
              "Spojená škola, Komárňanská 28, Nové Zámky (Jedlik Ányos Elektrotechnikai Szakközépiskola)",
            year: "Sep 1, 2014 - Jun, 2018",
          },
          bsc: {
            title: "Bsc - Egyetem",
            degree:
              "BSc - Alkalmazott informatika, Közgazdaságtudományi és Informatikai Kar",
            institution: "Selye János Egyetem, Komárno",
            year: "Sep, 2020 - Jun, 2023",
          },
          msc: {
            title: "Msc - Egyetem",
            degree:
              "MSc - Alkalmazott informatika, Közgazdaságtudományi és Informatikai Kar",
            institution: "Selye János Egyetem, Komárno",
            year: "Sep, 2023 - Jun, 2025",
          },
          contact: {
            heading: "Lépjen kapcsolatba velem",
            description:
              "Jelenleg új lehetőségeket keresek — lépjünk kapcsolatba, ha úgy gondolja, hogy nagyszerűen illenének a csapatába vagy projektjébe.",
            name: "Név",
            content: "Tartalom",
            message: "Az üzeneted...",
            send: "E-mail küldése",
            sending: "Küldés...",
            success: "Az üzenet sikeresen elküldve!",
          },
          tech: {
            other: "Egyéb",
            future: "Tanulom / Meg akarom tanulni",
          },
          projects: {
            heading: "Néhány legújabb munkám",
            details: "További információkért kattintson",
            link: "Projekt megtekintése",
            close: "Bezárás",
            list: [
              {
                id: 1,
                name: "Social Media App",
                description:
                  "Egy full-stack közösségi média alkalmazás, amely tanulási célokra készült. Modern webes technológiákkal épült, valós idejű interakciókat, felhasználói hitelesítést és modern felhasználói felületet kínál.",
                techStack: [
                  "js",
                  "react",
                  "tailwindcss",
                  "nodejs",
                  "expressjs",
                  "mysql",
                ],
                techDetails: [
                  "Javascript",
                  "React",
                  "React Router",
                  "TanStack Query",
                  "Node.js",
                  "Express",
                  "MySQL",
                ],
                link: "https://github.com/RuzsikMarton/social-app-react-node",
                img: "/social-app.png",
              },
              {
                id: 2,
                name: "Weather Dashboard",
                description:
                  "Egy kis, full-stack időjárás-alkalmazás, amely Reacttel, Expresszel és az Open-Meteo API-val készült. Megjeleníti az aktuális időjárást és a 7 napos előrejelzést a kiválasztott városokhoz vagy a keresési találatokhoz.",
                techStack: [
                  "js",
                  "react",
                  "tailwindcss",
                  "nodejs",
                  "expressjs",
                ],
                techDetails: [
                  "Javascript",
                  "React",
                  "React Router",
                  "Node.js",
                  "Express",
                  "Open-Meteo API",
                ],
                link: "https://github.com/RuzsikMarton/weather-dashboard-react",
                img: "/weather.png",
              },
              {
                id: 3,
                name: "Bakalár dolgozat projekt",
                description:
                  "Egy full-stack síplatform, amelyet React és Node.js/Express segítségével készítettek egy alapképzési dolgozat részeként. Az alkalmazás hitelesítést, felhasználói interakciót és a síeléssel kapcsolatos adatok vizualizációját kínálja modern felhasználói felülettel.",
                techStack: [
                  "js",
                  "react",
                  "bootstrap5",
                  "nodejs",
                  "expressjs",
                  "mongodb",
                ],
                techDetails: [
                  "Javascript",
                  "React",
                  "Redux",
                  "React Router",
                  "React Bootstrap",
                  "Node.js",
                  "Express",
                  "MongoDB",
                ],
                link: "https://github.com/RuzsikMarton/ski-bachelor-thesis",
                img: "/bc.png",
              },
              {
                id: 4,
                name: "matrixvis - JS Könyvtár",
                description:
                  "A MatrixVis egy JavaScript könyvtár, amely interaktív algoritmus-vizualizációk létrehozására készült mátrixok segítségével. Egyszerűsíti a mátrixalapú algoritmusok bemutatását, így ideális eszköz oktatók, diákok és fejlesztők számára.",
                techStack: ["js"],
                techDetails: ["Javascript"],
                link: "https://github.com/RuzsikMarton/javascript-library-matrixalgorithm",
                img: "/mgr.png",
              },
            ],
          },
        },
      },
    },
  });

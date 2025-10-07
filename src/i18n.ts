import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    returnObjects: true,
    resources: {
        en: {
            translation: {
                greeting: "Welcome to React and react-i18next",
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
                    title: "Hello, I'm <br/><1>{{firstName}}</1> <br/><1>{{lastName}}</1>",
                    motto: "Junior Full-Stack Developer | Focused on learning, building, and delivering",
                    cv: "Download CV",
                    contact: "Contact Me",
                }
            }
        },
        sk: {
            translation: {
                greeting: "Vitajte v React a react-i18next",
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
                    title: "Ahoj, som <br/><1>{{firstName}}</1> <br/><1>{{lastName}}</1>",
                    motto: "Junior Full-Stack Developer | Zameriavam sa na učenie, tvorbu a realizáciu",
                    cv: "Stiahnuť CV",
                    contact: "Kontaktujte ma",
                }
            }
        },
        hu: {
            translation: {
                greeting: "Üdvözöljük a React és a react-i18next alkalmazásban",
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
                    title: "Szia, <br/><1>{{firstName}}</1> <br/><1>{{lastName}}</1> vagyok",
                    motto: "Junior Full-Stack Fejlesztő | Fókuszban a tanulás, az építés és a megvalósítás",
                    cv: "CV letöltése",
                    contact: "Lépjen kapcsolatba velem",
                }
            }
        }
    }
    
})
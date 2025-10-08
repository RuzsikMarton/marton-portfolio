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
            coffee: "Coffee count",
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
            description: "I'm currently exploring new opportunities — let's connect if you think I'd be a great fit for your team or project.",
            name: "Name",
            content: "Content",
            message: "Your message...",
            send: "Send Email",
            sending: "Sending...",
            success: "Message sent successfully!",
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
            coffee: "Počet vypitých káv",
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
            description: "Aktuálne hľadám nové príležitosti — kontaktujte ma, ak si myslíte, že by som bol pre váš tím alebo projekt vhodný.",
            name: "Meno",
            content: "Obsah",
            message: "Vaša správa...",
            send: "Odoslať email",
            sending: "Odosielanie...",
            success: "Správa bola úspešne odoslaná!",
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
            coffee: "Fogyasztott kávék száma",
            education: "Tanulmányok",
          },
          highSchool: {
            title: "Középiskola",
            degree: "Középiskolai bizonyítvány - Villamosmérnöki - Informatikai szakirány",
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
            description: "Jelenleg új lehetőségeket keresek — lépjünk kapcsolatba, ha úgy gondolja, hogy nagyszerűen illenének a csapatába vagy projektjébe.",
            name: "Név",
            content: "Tartalom",
            message: "Az üzeneted...",  
            send: "E-mail küldése",
            sending: "Küldés...",
            success: "Az üzenet sikeresen elküldve!",
          },
        },
      },
    },
  });

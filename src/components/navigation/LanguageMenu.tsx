import { useState } from "react";
import { LanguageIcon, ExpandMoreIcon, CheckIcon } from "../../assets/Icons";
import { AnimatePresence, motion } from "framer-motion";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const LanguageMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams<{ lang: string }>();

  const { heading, english, slovak, hungarian } = t("language", { returnObjects: true }) as {
    heading: string;
    english: string;
    slovak: string;
    hungarian: string;
  };

  const languages = [
    { code: "en", lang: english, flag: "gb" },
    { code: "sk", lang: slovak, flag: "sk" },
    { code: "hu", lang: hungarian, flag: "hu" },
  ];

  const getCurrentLanguageName = () => {
    const currentLang = languages.find(lng => lng.code === i18n.language);
    return currentLang ? currentLang.lang : english;
  };

  const changeLanguage = (lng: string) => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    // Remove current language from path if it exists
    const pathWithoutLang = pathSegments.length > 0 && ['en', 'sk', 'hu'].includes(pathSegments[0])
      ? pathSegments.slice(1).join('/')
      : pathSegments.join('/');
    
    // Create new path with new language and navigate
    const newPath = `/${lng}${pathWithoutLang ? '/' + pathWithoutLang : ''}`;
    navigate(newPath);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="inline-flex items-center justify-center bg-accent text-dark rounded-full px-4 py-1 font-semibold cursor-pointer hover:bg-hover mobile-touch active:bg-hover-dark"
      >
        <LanguageIcon className="h-6 w-6 mr-1" />
        <span>{getCurrentLanguageName()}</span>
        <ExpandMoreIcon
          className={`h-6 w-6 transition-transform duration-200 ${
            menuOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-max bg-bg border border-accent rounded-md z-10"
          >
            <div className="px-3 py-2 text-sm">{heading}</div>
            <div className="flex flex-col px-0.5 py-0.5 gap-1">
              {languages.map((language) => (
                <div
                  className={
                    "menu-item" +
                    (i18n.language === language.code ? " selected-language" : "")
                  }
                  key={language.code}
                  onClick={() => {
                    changeLanguage(language.code);
                    setMenuOpen(false);
                  }}
                >
                  <span className={`fi fi-${language.flag}`}></span>
                  {language.lang}
                  {i18n.language === language.code ? <CheckIcon /> : null}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageMenu;

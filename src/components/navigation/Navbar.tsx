import { motion } from "framer-motion";
import NavMenu from "./NavMenu";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import LanguageMenu from "./LanguageMenu";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const { about, projects, contact } = t("navbar", { returnObjects: true }) as {
    about: string;
    projects: string;
    contact: string;
  };

  const navItems = [
    { key: 'about', label: about },
    { key: 'projects', label: projects },
    { key: 'contact', label: contact }
  ];

  return (
    <header className="text-primary py-8 lg:py-12 relative">
      <div className="basecontainer mx-auto flex justify-between items-center ">
        <p className="text-4xl font-semibold ">MártonRuzsik</p>
        <div className="hidden xl:flex items-center gap-8 relative">
          <nav className="flex gap-12">
            {navItems.map((item) => (
              <motion.p
                key={item.key}
                whileHover={{ scale: 1.1 }}
                className="relative cursor-pointer group mobile-touch"
              >
                {item.label}
                <span className="menu-line"></span>
              </motion.p>
            ))}
          </nav>
          <LanguageMenu />
        </div>
        <NavMenu navItems={navItems} />
      </div>
    </header>
  );
};

export default Navbar;

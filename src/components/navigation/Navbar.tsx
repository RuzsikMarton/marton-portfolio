import { motion } from "framer-motion";
import NavMenu from "./NavMenu";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import LanguageMenu from "./LanguageMenu";

const Navbar = () => {

  return (
    <header className="text-primary py-8 lg:py-12 relative">
      <div className="basecontainer mx-auto flex justify-between items-center ">
        <p className="text-4xl font-semibold ">Márton Ruzsik</p>
        <div className="hidden xl:flex items-center gap-8 relative">
          <nav className="flex gap-6">
            <motion.p 
              whileHover={{ scale: 1.1 }}
              className="relative cursor-pointer group"
            >
              About
              <span className="menu-line"></span>
            </motion.p>
            <motion.p 
              whileHover={{ scale: 1.1 }}
              className="relative cursor-pointer group"
            >
              Tech Stack
              <span className="menu-line"></span>
            </motion.p>
            <motion.p 
              whileHover={{ scale: 1.1 }}
              className="relative cursor-pointer group"
            >
              Projects
              <span className="menu-line"></span>
            </motion.p>
            <motion.p 
              whileHover={{ scale: 1.1 }}
              className="relative cursor-pointer group"
            >
              Contact
              <span className="menu-line"></span>
            </motion.p>
          </nav>
          <LanguageMenu />
        </div>
        <NavMenu />
      </div>
    </header>
  );
};

export default Navbar;

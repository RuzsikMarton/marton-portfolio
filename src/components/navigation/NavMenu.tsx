import { useState } from "react";
import { MenuIcon } from "../../assets/Icons";
import { motion } from "framer-motion";
import LanguageMenu from "./LanguageMenu";
const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative block xl:hidden">
      <motion.button
        onClick={() => setMenuOpen(!menuOpen)}
        whileHover={{ scale: 1.5 }}
        className="cursor-pointer"
      >
        <MenuIcon fontSize="large" className=" text-accent" />
      </motion.button>
      {menuOpen && (
        <div className="fixed -top-2 left-0 right-0 w-full bg-bg z-50 mt-[120px] shadow-lg border border-border">
          <div className="basecontainer mx-auto py-6">
            <nav className="flex flex-col items-center gap-4 pt-4">
              <LanguageMenu/>
              <div className="mb-5"></div>
              <motion.p
                whileHover={{ scale: 1.05 }}
                className="relative text-white text-lg font-medium cursor-pointer group"
              >
                About
                <span className="menu-line"></span>
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.05 }}
                className="relative text-white text-lg font-medium cursor-pointer group"
              >
                Tech Stack
                <span className="menu-line"></span>
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.05 }}
                className="relative text-white text-lg font-medium cursor-pointer group"
              >
                Projects
                <span className="menu-line"></span>
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.05 }}
                className="relative text-white text-lg font-medium cursor-pointer group"
              >
                Contact
                <span className="menu-line"></span>
              </motion.p>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMenu;

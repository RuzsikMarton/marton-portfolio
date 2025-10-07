import { useState, useEffect } from "react";
import { MenuIcon, CloseIcon } from "../../assets/Icons";
import { motion, AnimatePresence } from "framer-motion";
import LanguageMenu from "./LanguageMenu";

interface NavItem {
  key: string;
  label: string;
}

interface NavMenuProps {
  navItems: NavItem[];
}

const NavMenu = ({ navItems }: NavMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <div className="relative block xl:hidden">
      <motion.button
        onClick={() => setMenuOpen(!menuOpen)}
        whileHover={{ scale: 1.5 }}
        className="cursor-pointer z-[60]"
      >
        <MenuIcon fontSize="large" className="text-accent" />
      </motion.button>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-bg border-l border-border z-50 shadow-2xl"
            >
              <div className="p-6 h-full overflow-y-auto">
                <span className="text-2xl font-semibold flex justify-end text-accent cursor-pointer" onClick={() => {setMenuOpen(false)}}><CloseIcon className={"mobile-touch"}fontSize="large"/></span>
                <nav className="flex flex-col items-center gap-6 pt-8">
                  <LanguageMenu />
                  <div className="w-full h-px bg-border my-4"></div>
                  {navItems.map((item) => (
                    <motion.p
                      key={item.key}
                      whileHover={{ scale: 1.05 }}
                      className="relative text-white text-lg font-medium cursor-pointer group mobile-touch"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                      <span className="menu-line"></span>
                    </motion.p>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMenu;

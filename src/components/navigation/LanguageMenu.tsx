import { useState } from "react";
import { LanguageIcon, ExpandMoreIcon, CheckIcon } from "../../assets/Icons";
import { AnimatePresence, motion } from "framer-motion";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const LanguageMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="inline-flex items-center justify-center bg-accent text-dark rounded-full px-4 py-1 font-semibold cursor-pointer hover:bg-hover"
      >
        <LanguageIcon className="h-6 w-6 mr-1" />
        <span>English</span>
        <ExpandMoreIcon className="h-6 w-6" />
      </button>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-max bg-bg border border-accent rounded-md z-10"
          >
            <div className="px-3 py-2 text-sm">Language</div>
            <div className="flex flex-col px-0.5 py-0.5 gap-1">
              <div className="menu-item">
                <span className="fi fi-gb"></span> <>English</>
                <CheckIcon />
              </div>
              <div className="menu-item">
                <span className="fi fi-sk"></span>
                <>Slovak</>
              </div>
              <div className="menu-item">
                <span className="fi fi-hu"></span>
                <>Hungarian</>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageMenu;

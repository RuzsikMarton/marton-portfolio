import { motion } from "framer-motion";
import { useState } from "react";

interface TechComponentProps {
  name: string;
  icon: string;
}

const TechComponent = ({ name, icon }: TechComponentProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div
      className="flex w-max h-max p-0.5 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative w-32 h-16"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div 
          className="absolute w-full h-full flex items-center justify-center bg-zinc-800 rounded"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-[16px] px-2 py-1 rounded text-white/80 text-center leading-tight">
            {name}
          </span>
        </motion.div>
        <motion.div 
          className="absolute w-full h-full flex items-center justify-center bg-bg rounded p-2"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <img src={icon} alt={name} className="w-full h-full object-contain" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechComponent;

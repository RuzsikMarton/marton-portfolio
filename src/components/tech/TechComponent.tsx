import { motion } from "framer-motion";
import { useState } from "react";
import StackIcon  from "tech-stack-icons";

interface TechComponentProps {
  name: string;
  icon: string;
}

const TechComponent = ({ name, icon }: TechComponentProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div
      className="flex w-max h-max p-0.5 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative w-32 h-14"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div 
          className="absolute w-full h-full flex items-center justify-center bg-zinc-800 rounded"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-[16px] px-2 py-1 rounded text-accent font-bold text-center leading-tight">
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
          <StackIcon name={icon} className="w-32 h-14" variant="dark"/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechComponent;

import { motion } from "framer-motion";
import { LaunchIcon } from "../../assets/Icons";
import StackIcon from "tech-stack-icons";
import { useTranslation } from "react-i18next";

type Project = {
  id?: number;
  name: string;
  description: string;
  techStack: string[];
  techDetails: string[];
  link: string;
  img: string;
};

const ProjectCard = ({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) => {
  const { t } = useTranslation();
  const { details } = t("projects", {returnObjects: true}) as { details: string };
  return (
    <motion.button
      layoutId={`card-${project.id}`}
      onClick={() => onOpen(project)}
      className="group text-left cursor-pointer w-md sm:w-96 lg:min-h-[28rem] overflow-hidden shadow-lg bg-bg rounded-lg hover:bg-bg-dark border border-border hover:border-white/30 p-5 transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.img
        layoutId={`img-${project.id}`}
        src={project.img}
        alt={project.name}
        className="w-full h-48 lg:h-56 object-cover rounded-md mb-2"
      />
      <div className="p-4">
        <h3 className="text-base md:text-lg lg:text-2xl font-semibold text-white/90 mb-4">
          {project.name}
        </h3>

        <div className="flex justify-between items-center mb-4">
          {/* Tech Stack Icons */}
          <div className="flex">
            {project.techStack.map((tech, index) => (
              <motion.div
                key={tech}
                className="border border-border/75 rounded-full w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center bg-black relative"
                style={{
                  transform: `translateX(calc(-2px + ${index} * -5px))`,
                }}
              >
                <StackIcon name={tech} className="p-2" variant="dark" />
              </motion.div>
            ))}
          </div>

          {/* Launch Icon*/}
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-accent/10 border border-accent/30 rounded-full group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-300"
            whileHover={{
              scale: 1.1,
              rotate: 12,
              transition: { duration: 0.2 },
            }}
          >
            <LaunchIcon className="text-accent w-5 h-5 group-hover:text-accent-hover transition-colors duration-300" />
          </motion.a>
        </div>
        {/* Click for more info*/}
        <motion.div
          className="flex justify-center items-center mt-4 p-3 rounded-lg bg-accent/5 border border-accent/20 group-hover:bg-accent/10 group-hover:border-accent/40 transition-all duration-300"
          whileHover={{ y: -2 }}
        >
          <div className="flex items-center gap-2">
            <p className="text-sm md:text-base text-accent font-medium group-hover:text-accent-hover transition-colors duration-300">
              {details}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ProjectCard;

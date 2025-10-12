import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
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

const ProjectDetail = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: (p: Project) => void;
}) => {
  const {t} = useTranslation();
  const {link, close} = t("projects" , {returnObjects: true}) as {link: string, close: string};
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <AnimatePresence>
      <motion.div
        key={"overlay"}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={() => onClose(project)}
      />
      <motion.div
        layoutId={`card-${project.id}`}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[90vw] max-w-3xl max-h-[100vh] rounded-3xl bg-bg border border-white/10 overflow-hidden z-50 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.img
          layoutId={`img-${project.id}`}
          src={project.img}
          alt={project.name}
          className="w-full h-56 md:h-72 object-cover flex-shrink-0"
        />
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 text-white">
            <h2 className="text-2xl font-bold">{project.name}</h2>
          </div>
          <div className="p-6 pt-0">
            <p className="mb-4 text-white/80">{project.description}</p>
            <div className="mb-4">
              <strong className="text-white mb-2 block">Tech Stack:</strong>
              <div className="flex flex-wrap gap-2">
                {project.techDetails.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 mt-6 justify-between">
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{scale: 0.95}}
                  className="px-4 py-1.5 bg-bg text-accent/80 border-accent/80 rounded-xl border font-semibold hover:text-bg hover:bg-accent/90 transition-colors duration-200"
                >
                  {link}
                </motion.a>
              )}
              <motion.button
                onClick={() => onClose(project)}
                whileTap={{scale: 0.95}}
                className="px-4 py-1.5 border border-white/30 text-white/80 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-200"
              >
                {close}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetail;

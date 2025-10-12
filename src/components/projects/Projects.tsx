import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import ProjectDetail from "./ProjectDetail";

type Project = {
  id?: number;
  name: string;
  description: string;
  techStack: string[];
  techDetails: string[];
  link: string;
  img: string;
};

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const { t } = useTranslation();
  const { heading, list } = t("projects", { returnObjects: true }) as {
    heading: string;
    list: Project[];
  };
  return (
    <div id="projects" className="basecontainer mx-auto">
      <div className="w-full h-full py-5 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="flex-1 h-0.5 bg-accent max-w-32 sm:max-w-64" />
          <span className="text-base sm:text-xl font-semibold uppercase text-white/80 whitespace-nowrap px-4">
            {heading}
          </span>
          <span className="flex-1 h-0.5 bg-accent max-w-32 sm:max-w-64" />
        </div>
        <div className="mt-5 flex flex-wrap gap-16 p-4 justify-center items-center">
          {list.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selected && (
          <ProjectDetail project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;

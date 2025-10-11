import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import ProjectDetail from "./ProjectDetail";

type Project = {
  id? : number;
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
  const {heading, list} = t("projects", { returnObjects: true }) as {
    heading: string;
    list: Project[];
  };
  return (
    <div className="basecontainer mx-auto">
      <div className="w-full h-full py-5 text-center">
        <span className="text-2xl font-semibold text-white/80">
          {heading}
        </span>
        <div className="mt-5 flex flex-wrap gap-16 p-4 justify-center items-center">
          {list.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelected}/>
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

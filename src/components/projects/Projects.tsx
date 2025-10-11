import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div className="basecontainer mx-auto">
      <div className="w-full h-full p-5 text-center">
        <span className="text-2xl font-semibold text-white/80">
          Some of the projects i have been working on
        </span>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Project 1 */}
          <ProjectCard />
          {/* Project 2 */}
          <ProjectCard />
          {/* Project 3 */}
          <ProjectCard />
          {/* Project 4 */}
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;

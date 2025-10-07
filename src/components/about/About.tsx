import { useTranslation } from "react-i18next";
import { SchoolOutlinedIcon } from "../../assets/Icons";
import EducationCard from "./EducationCard";

const About = () => {
  const { t } = useTranslation();

  const { age, experience, projects, coffee, education } = t("about", {
    returnObjects: true,
  }) as {
    age: string;
    experience: string;
    projects: string;
    coffee: string;
    education: string;
  };

  return (
    <div className="basecontainer w-full h-full mt-12 mx-auto">
      <div className="flex flex-wrap gap-6 justify-between items-center mb-32">
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold">25</h1>{" "}
          <span className="text-white/80 leading-snug max-w-[100px]">{age}</span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold">1</h1>{" "}
          <span className="text-white/80 leading-snug max-w-[100px]">{experience}</span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold ">5</h1>{" "}
          <span className="text-white/80 leading-snug max-w-[100px]">{projects}</span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold">∞</h1>{" "}
          <span className="text-white/80 leading-snug max-w-[100px]">{coffee}</span>
        </div>
      </div>
      <div className="text-4xl items-center justify-center flex gap-2 font-bold">
        <SchoolOutlinedIcon fontSize="large" className="text-accent" /> 
        <span>{education}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6 lg:gap-4">
        <EducationCard educationType={"highSchool"}/>
        <EducationCard educationType={"bsc"}/>
        <EducationCard educationType={"msc"}/> 
      </div>
    </div>
  );
};

export default About;

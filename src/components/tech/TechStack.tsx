import { LayersIcon } from "../../assets/Icons";
import TechComponent from "./TechComponent";
import { useTranslation } from "react-i18next";

const TechStack = () => {
  const { t } = useTranslation();

  const { other, future } = t("tech", { returnObjects: true }) as {
    other: string;
    future: string;
  };
  return (
    <div className="basecontainer mt-12">
      <div className="w-full h-full flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl font-semibold mb-2 items-center"><LayersIcon className="text-accent" fontSize="large"/>Tech Stack</h2>
        <div className="flex flex-col space-y-4 px-6 py-3">
          <h2 className="text-xl font-semibold">
            <span className="relative inline-block">
              Frontend
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-accent"></span>
            </span>
          </h2>
          <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
            <TechComponent name="JavaScript" icon="js" />
            <TechComponent name="TypeScript" icon="typescript" />
            <TechComponent name="ReactJS" icon="react" />
            <TechComponent name="HTML5" icon="html5" />
            <TechComponent name="Redux" icon="redux" />
            <TechComponent name="React Query" icon="reactquery" />
            <TechComponent name="CSS3" icon="css3" />
            <TechComponent name="TailwindCSS" icon="tailwindcss" />
            <TechComponent name="Sass" icon="sass" />
            <TechComponent name="Webpack" icon="webpack" />
          </div>
        </div>
        <div className="flex flex-col space-y-4 px-6 py-3">
          <h2 className="text-xl font-semibold">
            <span className="relative inline-block">
              Backend
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-accent"></span>
            </span>
          </h2>
          <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
            <TechComponent name="NodeJS" icon="nodejs" />
            <TechComponent name="ExpressJS" icon="expressjs" />
            <TechComponent name="MongoDB" icon="mongodb" />
            <TechComponent name="MySQL" icon="mysql" />
          </div>
        </div>
        <div className="flex flex-col space-y-4 px-6 py-3">
          <h2 className="text-xl font-semibold">
            <span className="relative inline-block">
              {other}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-accent"></span>
            </span>
          </h2>
          <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
            <TechComponent name="Git" icon="git" />
            <TechComponent name="Vercel" icon="vercel" />
            <TechComponent name="EsLint" icon="eslint" />
            <TechComponent name="npm" icon="npm" />
          </div>
        </div>
        <div className="md:flex flex-col hidden space-y-4 px-6 py-3">
          <h2 className="text-xl font-semibold">
            <span className="relative inline-block">
              {future}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-accent"></span>
            </span>
          </h2>
          <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
            <TechComponent name="NextJS" icon="nextjs" />
            <TechComponent name="PostgreSQL" icon="postgresql" />
            <TechComponent name="GraphQL" icon="graphql" />
            <TechComponent name="AWS" icon="aws" />
            <TechComponent name="Jest" icon="jest" />
            <TechComponent name="Playwright" icon="playwright" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

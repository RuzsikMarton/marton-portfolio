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
        <h2 className="text-4xl font-semibold mb-2 items-center">
          <LayersIcon className="text-accent" fontSize="large" />
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 md:gap-8 mx-auto w-full py-20">
          {/* Frontend */}
          <div className="relative md:col-span-6 lg:col-span-3 overflow-hidden rounded-3xl border border-white/20 backdrop-blur-sm bg-bg-dark shadow-lg ">
            <div className="flex flex-col space-y-6 p-6 h-full">
              <h2 className="text-lg lg:text-3xl font-semibold text-center lg:text-left">
                <span className="relative inline-block">
                  Frontend
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-accent"></span>
                </span>
              </h2>
              <div className="flex-1 flex items-center justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 justify-items-center max-w-md lg:max-w-none">
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
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-2 flex flex-col md:flex-row lg:flex-col gap-4 md:gap-8">
            {/* Backend */}
            <div className="overflow-hidden rounded-3xl border border-white/20 backdrop-blur-sm bg-bg-dark shadow-lg">
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
            </div>

            {/* Other */}
            <div className="overflow-hidden rounded-3xl border border-white/20 backdrop-blur-sm bg-bg-dark shadow-lg">
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
            </div>
          </div>

          {/* Future section - hidden for now */}
          <div className="hidden flex-col space-y-4 px-6 py-3">
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
    </div>
  );
};

export default TechStack;

import TechComponent from "./TechComponent";

const TechStack = () => {
  return (
    <div className="basecontainer mt-12">
      <div className="w-full h-full flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-1 flex-col border-2 border-accent">
            <h2>Frontend</h2>
            <div className="flex flex-wrap">
              <TechComponent name="JavaScript" icon="/tech/js.png" />
              <TechComponent name="TypeScript" icon="/tech/ts.png" />
              <TechComponent name="ReactJS" icon="/tech/react.png" />
              <TechComponent name="HTML5" icon="/tech/html.png" />
              <TechComponent name="Redux" icon="/tech/reduxjs.png" />
              <TechComponent name="TailwindCSS" icon="/tech/tailwind.png" />
              <TechComponent name="CSS3" icon="/tech/css.png" />
              <TechComponent name="Sass" icon="/tech/sass.png" />
              <TechComponent name="Framer Motion" icon="/tech/motion.png" />  
            </div>
          </div>
          <div className="flex flex-1 flex-col border-2 border-accent">
            <h2>Backend</h2>
            <div className="flex flex-wrap">
              <TechComponent name="NodeJS" icon="/tech/node.png" />
            <TechComponent name="ExpressJS" icon="/tech/express.png" />
            <TechComponent name="MongoDB" icon="/tech/mongo.png" />
            <TechComponent name="PostgreSQL" icon="/tech/postgre.png" />
            <TechComponent name="MySQL" icon="/tech/mysql.png" />
            <TechComponent name="GraphQL" icon="/tech/graphql.png" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col border-2 border-accent">
            <h2>Miscellaneous</h2>
            <div></div>
          </div>
          <div className="flex flex-col border-2 border-accent">
            <h2>To learn</h2>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

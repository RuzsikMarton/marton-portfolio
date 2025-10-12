import { Trans, useTranslation } from "react-i18next";
import {
  GitHubIcon,
  LinkedInIcon,
  FacebookIcon,
  FileDownloadOutlinedIcon,
} from "../assets/Icons";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  const { t, i18n } = useTranslation();

  const { motto, cv, contact } = t("hero", {
    returnObjects: true,
  }) as {
    motto: string;
    cv: string;
    contact: string;
  };

  return (
    <div id="hero" className="w-full h-full xl:h-screen relative">
      <div className="basecontainer mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb:24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full-Stack Developer</span>
            <div className="text-7xl font-bold leading-tight mb-6">
              <Trans
                i18nKey="hero.title"
                values={{ firstName: "Márton", lastName: "Ruzsik" }}
                components={{
                  1: <span className="text-accent" />,
                  br: <br />,
                }}
              />
            </div>
            <div className="mb-9 text-white/80 max-w-[500px]">{motto}</div>
            <div className="flex flex-col xl:flex-row gap-6 xl:items-center">
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center text-sm">
                <Link
                  to={`/resume/${i18n.language}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="items-center flex justify-center px-5 py-3 uppercase text-accent border-2 border-accent rounded-full font-bold bg-transparent hover:text-bg hover:bg-accent cursor-pointer mobile-touch active:bg-hover-dark active:border-none">
                    {cv} <FileDownloadOutlinedIcon fontSize="small" />
                  </button>
                </Link>
                <HashLink to="#contact" smooth>
                  <button className=" px-5 py-3 text-bg bg-accent border rounded-full font-bold hover:bg-hover mobile-touch cursor-pointer active:bg-hover-dark">
                    {contact}
                  </button>
                </HashLink>
              </div>
              <div className="flex justify-center xl:justify-start gap-4 items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/RuzsikMarton"
                  className="link-buttons"
                >
                  <GitHubIcon fontSize="small" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/m%C3%A1rton-ruzsik-47561b313/"
                  className="link-buttons"
                >
                  <LinkedInIcon fontSize="small" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/marton.ruzsik/"
                  className="link-buttons"
                >
                  <FacebookIcon fontSize="small" />
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none my-8 xl:my-0">
            <img
              src="/github.jpeg"
              alt="me"
              className="w-72 h-72 xl:w-96 xl:h-96 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="grid-background"></div>
      <div className="grid-background-mask"></div>
    </div>
  );
};

export default Hero;

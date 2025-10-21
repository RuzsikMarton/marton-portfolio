import Navbar from "../components/navigation/Navbar";
import About from "../components/about/About";
import TechStack from "../components/tech/TechStack";
import Projects from "../components/projects/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <link rel="canonical" href="https://martonruzsik.vercel.app/" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Márton Ruzsik - Portfolio" />
        <meta property="og:title" content={t("meta.title")} />
        <meta property="og:description" content={t("meta.ogDescription")} />
        <meta property="og:url" content="https://martonruzsik.vercel.app/" />
        <meta property="og:image" content="/github.jpeg" />
        <meta
          property="og:image:alt"
          content="Marton Ruzsik Developer Portfolio"
        />
      </Helmet>
      <Navbar />
      <section className="text-primary">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Home;

import Navbar from "../components/navigation/Navbar";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="text-primary pb-20">
        <Hero />
        <About />
        <TechStack />
        <TechStack />
        <TechStack />
        <TechStack />
        <TechStack />
        <TechStack />
        <TechStack />
        <TechStack />
        <TechStack />
        <TechStack />
        <TechStack />
        <TechStack />
        <TechStack />
        <TechStack />
        <TechStack />
        <TechStack />
        <Projects />
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Home;

import Navbar from "../components/navigation/Navbar";
import About from "../components/about/About";
import TechStack from "../components/tech/TechStack";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
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

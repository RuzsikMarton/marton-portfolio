import Navbar from "../components/Navbar";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="text-primary">
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

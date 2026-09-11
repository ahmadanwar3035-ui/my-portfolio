import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import Hero from "./components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Stats from "./Components/Stats";
// import Certificates from "./Components/Certificates";
import Testimonials from "./Components/Testimonial";
import Cursor from "./Components/Cursor";
import ScrollProgress from "./Components/Scroll";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#030712] text-white min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        {/* <Certificates /> */}
        <Testimonials />
        <Contact />
        <Cursor />
        <ScrollProgress />
      </main>

      <Footer />
    </div>
  );
}

export default App;

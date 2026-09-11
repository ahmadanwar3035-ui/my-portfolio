
import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import About from "./Components/About";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
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
    <div className="min-h-screen w-full overflow-x-hidden bg-[#030712] text-white">
      <Navbar />

      <main className="w-full overflow-x-hidden">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <Cursor />
      <ScrollProgress />

      <Footer />
    </div>
  );
}

export default App;


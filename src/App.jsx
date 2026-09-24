import { useEffect, useState } from "react";

import Sidebar from "./Components/Sidebar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
// import Certificates from "./Components/Certificates";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import Loader from "./Components/Loader";
import Cursor from "./Components/Cursor";
import ScrollToTop from "./Components/Scroll";

export default function App() {
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
    <div className="min-h-screen overflow-x-hidden bg-[#F6F7FC] text-[#14162B]">
      {/* Custom Cursor */}
      <Cursor />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Website */}
      <main>
        <Hero />

        <About />

        <Services />

        <Experience />

        <Education />

        <Projects />

        <Skills />

        {/* <Certificates /> */}

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll To Top */}
      <ScrollToTop />
    </div>
  );
}

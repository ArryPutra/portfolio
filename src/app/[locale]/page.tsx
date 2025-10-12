import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import Home from "@/sections/Home";
import Works from "@/sections/Works";
import Certificates from "@/sections/Certificates";
import Contact from "@/sections/Contact";
import Projects from "@/sections/Project";
import Skills from "@/sections/Skills";
import About from "@/sections/About";

export default function Page() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Works />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

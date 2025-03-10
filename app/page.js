import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/Testimonial";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <div className="bg-gray-900 tracking-tight antialiased shadow-md">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Testimonial />
      <Blog />
    </div>
  );
}

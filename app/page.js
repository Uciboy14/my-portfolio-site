import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import TestimonialComponent from "@/components/TestimonialComponent";

export default function Home() {
  return (
    <div className="bg-gray-900 ">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <TestimonialComponent />
      <Blog />
    </div>
  );
}

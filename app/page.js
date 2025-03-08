import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

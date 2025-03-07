import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

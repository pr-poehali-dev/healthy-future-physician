import Hero from "@/components/Hero";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Hero />
      <About />
      <Blog />
      <Consultation />
      <Footer />
    </div>
  );
};

export default Index;
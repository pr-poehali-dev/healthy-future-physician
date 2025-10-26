import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-purple-500/20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#020617]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center py-8">
          <p className="text-gray-500">&copy; {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
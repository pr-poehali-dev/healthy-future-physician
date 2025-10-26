import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-purple-500/20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#020617]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Космическая Медицина
          </h3>
          <p className="text-gray-400">
            Современный подход к здоровью с технологиями будущего
          </p>
        </div>

        <div className="border-t border-purple-500/20 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Космическая Медицина. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-purple-500/20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#020617]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Космическая Медицина
            </h3>
            <p className="text-gray-400">
              Современный подход к здоровью с технологиями будущего
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@cosmichealth.space</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Орбитальная станция МКС-2</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Социальные сети</h4>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'Twitter', 'Youtube'].map((social) => (
                <button
                  key={social}
                  className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-purple-600/30 transition-colors"
                  aria-label={social}
                >
                  <Icon name={social as any} size={20} className="text-purple-400" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Космическая Медицина. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

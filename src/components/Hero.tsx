import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="stars absolute inset-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 glass-effect rounded-full">
            <span className="text-accent font-medium">Медицина будущего уже здесь</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fade-in">
            ВАШЕ космическое здоровье
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Персональный подход к вашему здоровью с технологиями будущего и профессионализмом врача
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('about')}
              className="glass-effect border-purple-500/50 hover:bg-purple-500/20"
            >
              <Icon name="User" size={20} className="mr-2" />
              О докторе
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-purple-400" />
      </div>

      <style>{`
        .stars {
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 60px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 50px 50px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 10px, #fff, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: stars 200s linear infinite;
        }
        
        @keyframes stars {
          from { background-position: 0 0; }
          to { background-position: -10000px 5000px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
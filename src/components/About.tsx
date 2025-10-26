import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const achievements = [
    { icon: "Award", title: "25+ лет опыта", desc: "В медицинской практике" },
    { icon: "Heart", title: "Индивидуальный подход", desc: "К каждому пациенту" }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#1E1B4B] to-[#0F172A]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            О докторе
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Современный врач, объединяющий классическую медицину и инновационные технологии
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-white">
                Врач общей практики
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Специализируюсь на комплексном подходе к здоровью, используя передовые методики диагностики и лечения. Моя миссия — помочь каждому пациенту достичь оптимального состояния здоровья и долголетия.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Образование в медицинском университете РФ и постоянное изучение новейших исследований позволяют мне предлагать лучшие решения для вашего здоровья.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                {achievements.map((item, idx) => (
                  <div key={idx} className="glass-effect p-4 rounded-lg hover:bg-purple-500/10 transition-all">
                    <Icon name={item.icon as any} size={32} className="text-accent mb-2" />
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-30 animate-pulse-slow"></div>
              <img 
                src="https://cdn.poehali.dev/projects/4985f7d6-99d3-41c2-a339-8560241c4c0b/files/42e7e188-b5b8-4bc1-8a1f-8a8b8df00ad1.jpg"
                alt="Доктор"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
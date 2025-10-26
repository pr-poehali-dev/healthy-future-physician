import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const Consultation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! 🚀",
      description: "Мы свяжемся с вами в ближайшее время для согласования консультации.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const features = [
    { icon: "Video", text: "Видеоконсультации HD качества" },
    { icon: "Calendar", text: "Гибкое расписание" },
    { icon: "FileText", text: "Персональные рекомендации" },
    { icon: "Shield", text: "Конфиденциальность данных" }
  ];

  return (
    <section id="consultation" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1B4B] via-[#0F172A] to-[#0F172A]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Истории из практики
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Получите профессиональную медицинскую консультацию не выходя из дома
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          <Card className="glass-effect border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Запись на консультацию</CardTitle>
              <CardDescription className="text-gray-400">
                Заполните форму и мы свяжемся с вами для согласования времени
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Имя</Label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="bg-background/50 border-purple-500/30 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="bg-background/50 border-purple-500/30 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="bg-background/50 border-purple-500/30 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Описание проблемы</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите кратко о своей проблеме..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="bg-background/50 border-purple-500/30 text-white placeholder:text-gray-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full cosmic-gradient text-white border-0 hover:scale-105 transition-transform"
                  size="lg"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Преимущества</h3>
              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center group-hover:bg-purple-600/40 transition-colors">
                      <Icon name={feature.icon as any} size={24} className="text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="glass-effect border-purple-500/20 overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="https://cdn.poehali.dev/projects/4985f7d6-99d3-41c2-a339-8560241c4c0b/files/aa4c20be-3684-48fc-b4f4-c05d1d71df48.jpg"
                  alt="Телемедицина"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">
                    Современные технологии для вашего здоровья
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
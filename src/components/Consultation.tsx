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

        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 text-center text-lg mb-8">
            Реальные случаи из моей медицинской практики
          </p>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
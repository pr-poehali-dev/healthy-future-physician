import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Blog = () => {
  const articles = [
    {
      title: "5 принципов космического здоровья",
      excerpt: "Узнайте, как космонавты поддерживают здоровье в условиях невесомости и как применить эти принципы в повседневной жизни.",
      category: "Здоровый образ жизни",
      readTime: "5 мин",
      image: "https://cdn.poehali.dev/projects/4985f7d6-99d3-41c2-a339-8560241c4c0b/files/1e8dc3ae-3687-4bfd-97e4-beb040050e4c.jpg"
    },
    {
      title: "Телемедицина будущего",
      excerpt: "Как технологии меняют медицину и делают качественную медицинскую помощь доступной каждому.",
      category: "Технологии",
      readTime: "7 мин",
      image: "https://cdn.poehali.dev/projects/4985f7d6-99d3-41c2-a339-8560241c4c0b/files/aa4c20be-3684-48fc-b4f4-c05d1d71df48.jpg"
    },
    {
      title: "Питание для долголетия",
      excerpt: "Научно обоснованные рекомендации по питанию, которые помогут вам жить дольше и чувствовать себя лучше.",
      category: "Питание",
      readTime: "6 мин",
      image: "https://cdn.poehali.dev/projects/4985f7d6-99d3-41c2-a339-8560241c4c0b/files/1e8dc3ae-3687-4bfd-97e4-beb040050e4c.jpg"
    }
  ];

  return (
    <section id="blog" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#1E1B4B]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Блог о здоровье
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Статьи о здоровье, технологиях и будущем медицины
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, idx) => (
            <Card 
              key={idx}
              className="glass-effect border-purple-500/20 overflow-hidden hover:border-purple-500/50 transition-all group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-purple-600 text-white border-0">
                  {article.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-400 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-purple-400 group-hover:text-purple-300">
                    <span>Читать</span>
                    <Icon name="ArrowRight" size={16} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

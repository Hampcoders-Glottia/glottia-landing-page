import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Estudiante de inglés",
      avatar: "MG",
      text: "Gracias a Glottia he mejorado muchísimo mi inglés conversacional. El ambiente es relajado y siempre conozco gente interesante. ¡Ya no tengo miedo de hablar!",
      rating: 5,
      type: "learner"
    },
    {
      name: "Ariana Calderon",
      role: "Dueña de cafetería",
      avatar: "CC",
      text: "Desde que nos unimos a Glottia, hemos visto un aumento del 30% en nuestras ventas durante las tardes. Los grupos son respetuosos y siempre consumen.",
      rating: 5,
      type: "local"
    },
    {
      name: "Ana Rodríguez",
      role: "Profesional en marketing",
      avatar: "AR",
      text: "Perfecto para practicar francés después del trabajo. Las sesiones virtuales me permiten conectar desde casa cuando no puedo asistir presencialmente.",
      rating: 5,
      type: "learner"
    },
    {
      name: "Biblioteca Central",
      role: "Espacio cultural",
      avatar: "BC",
      text: "Glottia nos ha ayudado a posicionarnos como un verdadero centro de intercambio cultural. La comunidad está muy agradecida por estos espacios.",
      rating: 5,
      type: "local"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Lo que dicen de nosotros
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Testimonios reales de aprendices y locales que ya forman parte de la comunidad Glottia
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-brand-purple opacity-20 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="#" alt={testimonial.name} />
                    <AvatarFallback className={`font-semibold ${
                      testimonial.type === 'learner' 
                        ? 'bg-brand-blue/10 text-brand-blue' 
                        : 'bg-brand-green/10 text-brand-green'
                    }`}>
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Type Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                  testimonial.type === 'learner' 
                    ? 'bg-brand-blue/10 text-brand-blue' 
                    : 'bg-brand-green/10 text-brand-green'
                }`}>
                  {testimonial.type === 'learner' ? 'Aprendiz' : 'Local Aliado'}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
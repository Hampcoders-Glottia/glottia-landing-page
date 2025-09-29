import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
  Heart,
  Users,
  Lightbulb,
  Globe
} from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Users,
      title: "Inclusión",
      description: "Creamos espacios seguros donde todas las personas pueden aprender y crecer juntas."
    },
    {
      icon: Heart,
      title: "Confianza",
      description: "Fomentamos un ambiente de apoyo mutuo donde los errores son parte del aprendizaje."
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Revolucionamos la forma tradicional de aprender idiomas con experiencias reales."
    },
    {
      icon: Globe,
      title: "Diversidad Cultural",
      description: "Celebramos las diferencias culturales como fuente de enriquecimiento mutuo."
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              Sobre Nosotros
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conoce nuestra historia, propósito y los valores que nos guían en la construcción de la comunidad global de práctica de idiomas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Misión */}
          <Card className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-brand-blue/10 p-3 rounded-lg">
                  <Target className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-blue">
                  Nuestra Misión
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Facilitar la práctica oral de idiomas a través de experiencias conversacionales reales, seguras y entretenidas, tanto en espacios públicos como virtuales, impulsando la confianza, la fluidez y la conexión entre personas con intereses lingüísticos comunes.
              </p>
            </CardContent>
          </Card>

          {/* Visión */}
          <Card className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-brand-green/10 p-3 rounded-lg">
                  <Eye className="h-8 w-8 text-brand-green" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-green">
                  Nuestra Visión
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Convertirse en la comunidad global de referencia para la práctica de idiomas a través de conversaciones naturales, generando encuentros significativos entre personas que buscan mantener vivo un idioma a través del habla cotidiana y el intercambio cultural.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Valores */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Nuestros Valores
            </span>
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Los principios fundamentales que guían cada decisión y acción en Glottia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <CardContent className="p-6">
                <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageCircle, 
  Users, 
  DollarSign, 
  Clock, 
  MapPin, 
  TrendingUp,
  Coffee,
  Star,
  ArrowRight
} from "lucide-react";
import conversationIcon from "@/assets/conversation-icon.jpg";
import locationIcon from "@/assets/location-icon.jpg";
import communityIcon from "@/assets/community-icon.jpg";

const Benefits = () => {
  const learnerBenefits = [
    {
      icon: MessageCircle,
      title: "Gana fluidez en conversaciones reales",
      description: "Practica con hablantes nativos y otros estudiantes en situaciones auténticas."
    },
    {
      icon: Users,
      title: "Conoce gente nueva",
      description: "Conecta con personas que comparten tu pasión por los idiomas y otras culturas."
    },
    {
      icon: DollarSign,
      title: "Acceso accesible sin academias",
      description: "Alternativa económica a las costosas academias tradicionales de idiomas."
    },
    {
      icon: Clock,
      title: "Flexibilidad total",
      description: "Elige cuándo y dónde practicar, presencial o virtualmente."
    }
  ];

  const localBenefits = [
    {
      icon: TrendingUp,
      title: "Atrae nuevos clientes",
      description: "Recibe grupos de personas motivadas que buscan espacios para conversar."
    },
    {
      icon: Coffee,
      title: "Aumenta el consumo en horas valle",
      description: "Optimiza la ocupación de tu local en horarios de menor actividad."
    },
    {
      icon: Star,
      title: "Publicidad gratuita para tu negocio",
      description: "Posiciónate como centro de intercambio cultural en tu comunidad."
    },
    {
      icon: MapPin,
      title: "Red de espacios aliados",
      description: "Únete a una comunidad de locales comprometidos con la educación."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Beneficios para todos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Glottia crea valor tanto para quienes quieren practicar idiomas como para los espacios que los acogen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Para Aprendices */}
          <div className="space-y-8 animate-slide-in">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <img 
                  src={conversationIcon} 
                  alt="Icono de conversación" 
                  className="w-12 h-12 rounded-lg"
                />
                <h3 className="text-2xl md:text-3xl font-bold text-brand-blue">
                  Para Aprendices
                </h3>
              </div>
              <p className="text-muted-foreground mb-8">
                Descubre por qué miles de estudiantes eligen Glottia para mejorar su fluidez
              </p>
            </div>

            <div className="space-y-4">
              {learnerBenefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-blue/10 p-3 rounded-lg group-hover:bg-brand-blue/20 transition-colors">
                        <benefit.icon className="h-6 w-6 text-brand-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{benefit.title}</h4>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="learner" size="lg" className="w-full lg:w-auto group">
              Únete como Aprendiz
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Para Locales */}
          <div className="space-y-8 animate-slide-in">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <img 
                  src={locationIcon} 
                  alt="Icono de ubicación" 
                  className="w-12 h-12 rounded-lg"
                />
                <h3 className="text-2xl md:text-3xl font-bold text-brand-green">
                  Para Locales
                </h3>
              </div>
              <p className="text-muted-foreground mb-8">
                Convierte tu espacio en un punto de encuentro cultural y aumenta tus ingresos
              </p>
            </div>

            <div className="space-y-4">
              {localBenefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-green/10 p-3 rounded-lg group-hover:bg-brand-green/20 transition-colors">
                        <benefit.icon className="h-6 w-6 text-brand-green" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{benefit.title}</h4>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="local" size="lg" className="w-full lg:w-auto group">
              Registra tu Local
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
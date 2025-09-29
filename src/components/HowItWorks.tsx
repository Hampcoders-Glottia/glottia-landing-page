import { Card, CardContent } from "@/components/ui/card";
import { 
  UserPlus, 
  Search, 
  Users, 
  Store, 
  Calendar, 
  Coffee
} from "lucide-react";

const HowItWorks = () => {
  const learnerSteps = [
    {
      icon: UserPlus,
      number: "1",
      title: "Regístrate y completa tu perfil",
      description: "Indica tu nivel de idioma, intereses y disponibilidad."
    },
    {
      icon: Search,
      number: "2",
      title: "Busca un encuentro",
      description: "Explora reuniones temáticas cerca de ti."
    },
    {
      icon: Users,
      number: "3",
      title: "¡Asiste y practica!",
      description: "Participa en conversaciones auténticas y mejora tu fluidez."
    }
  ];

  const localSteps = [
    {
      icon: Store,
      number: "1",
      title: "Registra tu local",
      description: "Crea el perfil de tu espacio con fotos y detalles."
    },
    {
      icon: Calendar,
      number: "2",
      title: "Ofrece tu espacio",
      description: "Define horarios disponibles y capacidad para grupos."
    },
    {
      icon: Coffee,
      number: "3",
      title: "Recibe a los practicantes",
      description: "Acoge grupos de estudiantes motivados y amigables."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              ¿Cómo funciona?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tres simples pasos para conectar idiomas, personas y espacios
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Para Aprendices */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-blue mb-4">
                Para Aprendices
              </h3>
              <p className="text-muted-foreground">
                Tu camino hacia la fluidez comienza aquí
              </p>
            </div>

            <div className="space-y-6">
              {learnerSteps.map((step, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-soft">
                          {step.number}
                        </div>
                        {index < learnerSteps.length - 1 && (
                          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-border" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <step.icon className="h-5 w-5 text-brand-blue" />
                          <h4 className="font-semibold">{step.title}</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Para Locales */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">
                Para Locales
              </h3>
              <p className="text-muted-foreground">
                Convierte tu espacio en un hub cultural
              </p>
            </div>

            <div className="space-y-6">
              {localSteps.map((step, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="bg-brand-green text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-soft">
                          {step.number}
                        </div>
                        {index < localSteps.length - 1 && (
                          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-border" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <step.icon className="h-5 w-5 text-brand-green" />
                          <h4 className="font-semibold">{step.title}</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
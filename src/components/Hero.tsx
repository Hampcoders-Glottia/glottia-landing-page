import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MapPin, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 min-h-screen flex items-center bg-gradient-subtle">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Practica idiomas
                </span>
                <br />
                <span className="text-foreground">cara a cara</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Conectamos personas que quieren practicar idiomas con espacios públicos perfectos para conversaciones reales y auténticas.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 p-3 bg-card rounded-lg shadow-card">
                <MessageCircle className="h-5 w-5 text-brand-blue" />
                <span className="text-sm font-medium">Conversaciones reales</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-card rounded-lg shadow-card">
                <Users className="h-5 w-5 text-brand-green" />
                <span className="text-sm font-medium">Conoce gente nueva</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-card rounded-lg shadow-card">
                <MapPin className="h-5 w-5 text-brand-orange" />
                <span className="text-sm font-medium">Espacios seguros</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Únete como Aprendiz
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => scrollToSection('como-funciona')}
              >
                Ver cómo funciona
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Personas practicando idiomas en un café moderno" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-brand-orange text-white p-3 rounded-full shadow-glow animate-bounce-in">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-brand-green text-white p-3 rounded-full shadow-glow animate-bounce-in">
              <Users className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
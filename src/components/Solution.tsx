import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CheckCircle, MessageSquare, Users, Globe } from "lucide-react";

const Solution = () => {
  // TODO: Replace these placeholder images with your actual solution images
  const solutionImages = [
   {
      src: "src/assets/usuario-aprendiz.jpeg", // REPLACE WITH YOUR IMAGE: Add your first solution image here
      alt: "Glottia App Screenshot 1"
    },
    {
      src: "src/assets/partner.jpeg", // REPLACE WITH YOUR IMAGE: Add your second solution image here
      alt: "Glottia App Screenshot 2"
    },
    {
      src: "src/assets/partner2.jpeg", // REPLACE WITH YOUR IMAGE: Add your third solution image here
      alt: "Glottia App Screenshot 3"
    },
    {
      src: "src/assets/reserva.jpeg", // REPLACE WITH YOUR IMAGE: Add your fourth solution image here
      alt: "Glottia App Screenshot 4"
    }
  ];

  const features = [
    {
      icon: MessageSquare,
      title: "Conversaciones Reales",
      description: "Practica con hablantes nativos y otros aprendices en situaciones auténticas"
    },
    {
      icon: Users,
      title: "Comunidad Activa",
      description: "Conecta con una red global de personas apasionadas por los idiomas"
    },
    {
      icon: Globe,
      title: "Múltiples Idiomas",
      description: "Practica cualquier idioma en espacios seguros y acogedores"
    },
    {
      icon: CheckCircle,
      title: "Progreso Garantizado",
      description: "Desarrolla fluidez y confianza a través de la práctica constante"
    }
  ];

  return (
    <section id="solution" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">
            Nuestra Solución: Glottia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Una plataforma innovadora que transforma la manera de practicar idiomas,
            conectando a aprendices con experiencias conversacionales auténticas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                ¿Cómo funciona Glottia?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Glottia revoluciona el aprendizaje de idiomas al crear un ecosistema donde
                la práctica conversacional es accesible, divertida y efectiva. Nuestra plataforma
                conecta a aprendices con locales anfitriones y otros estudiantes en experiencias
                inmersivas que van más allá de las aulas tradicionales.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">
                  Tecnología que Conecta Culturas
                </h4>
                <p className="text-muted-foreground text-sm">
                  Utilizamos algoritmos inteligentes de matching para conectarte con las
                  personas y experiencias perfectas según tu nivel, intereses y objetivos
                  de aprendizaje.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image Carousel */}
          <div className="relative">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-center mb-6 text-foreground">
                  Explora la Plataforma
                </h4>
                <Carousel className="w-full max-w-md mx-auto">
                  <CarouselContent>
                    {solutionImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-3">
                          {image.alt}
                        </p>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="bg-background/80 border-primary/30 hover:bg-primary/10" />
                  <CarouselNext className="bg-background/80 border-primary/30 hover:bg-primary/10" />
                </Carousel>
                {/* Instructions for adding images
                <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                  <p className="text-xs text-amber-800 dark:text-amber-200 text-center">
                   <strong>Para agregar tus imágenes:</strong> Reemplaza las rutas en el array 'solutionImages'
                    al inicio del componente (líneas marcadas con "REPLACE WITH YOUR IMAGE")
                  </p>
                </div>
                */}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;

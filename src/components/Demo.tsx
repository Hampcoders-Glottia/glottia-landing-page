import { Play } from "lucide-react";

const Demo = () => {
  return (
    <section id='demo' className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ve Glottia en Acción
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo nuestra plataforma transforma la práctica de idiomas a través de experiencias conversacionales reales
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* División izquierda - Video de YouTube */}
          <div className="space-y-6">
            <div className="relative aspect-video bg-muted rounded-lg border border-border overflow-hidden">
              {/* Video embebido de YouTube */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dhwZBx9cvtc"
                title="Demostración de Glottia"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* División derecha - Descripción del video */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Demostramos Cómo Funciona Glottia
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Proceso de verificación:</strong> Observa cómo validamos la identidad de nuestros usuarios para garantizar encuentros seguros
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Creación de eventos:</strong> Ve lo fácil que es organizar o unirse a sesiones de práctica de idiomas
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Experiencia conversacional:</strong> Descubre cómo facilitamos conversaciones naturales y entretenidas
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Conexión entre usuarios:</strong> Mira cómo conectamos personas con intereses lingüísticos comunes
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Espacios seguros:</strong> Conoce nuestros protocolos para mantener un ambiente confiable y respetuoso
                </p>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-lg text-foreground font-medium">
                Una demostración completa de cómo Glottia revoluciona el aprendizaje de idiomas a través de la práctica conversacional real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;

import { Button } from "@/components/ui/button";
import { Globe, Mail, MapPin, Phone, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Globe className="h-8 w-8 text-brand-blue" />
              <span className="text-2xl font-bold">Glottia</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Conectamos personas que quieren practicar idiomas con espacios perfectos para conversaciones auténticas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Para Aprendices */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Para Aprendices</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Cómo funciona</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Encuentra sesiones</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Niveles de idioma</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Modalidad virtual</a></li>
            </ul>
          </div>

          {/* Para Locales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Para Locales</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Únete como aliado</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Beneficios</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Requisitos</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Portal de locales</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3 text-background/70">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hola@glottia.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+51 999 123 456</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Lima, Perú</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">¿Listo para comenzar?</h3>
              <p className="text-background/70">Únete a nuestra comunidad hoy mismo</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="learner" size="lg">
                Únete como Aprendiz
              </Button>
              <Button variant="local" size="lg">
                Registra tu Local
              </Button>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/70">
          <p>&copy; {currentYear} Glottia. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-background transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
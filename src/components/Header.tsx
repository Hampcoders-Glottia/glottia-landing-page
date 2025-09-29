import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Globe className="h-8 w-8 text-brand-blue" />
          <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Glottia
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('como-funciona')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Cómo Funciona
          </button>
          <button
            onClick={() => scrollToSection('demo')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Demo
          </button>
          <button
            onClick={() => scrollToSection('beneficios')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Beneficios
          </button>
          <button
            onClick={() => scrollToSection('sobre-nosotros')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Sobre Nosotros
          </button>

          <button 
            onClick={() => scrollToSection('testimonios')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Testimonios
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm">
            Iniciar Sesión
          </Button>
          <Button variant="hero" size="sm">
            Registrarse
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              Beneficios
            </button>
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              Cómo Funciona
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </button>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" size="sm">
                Iniciar Sesión
              </Button>
              <Button variant="hero" size="sm">
                Registrarse
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
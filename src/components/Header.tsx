import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import logoFran from "@/assets/logo-fran.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta.");
    window.open(`https://wa.me/5551998369201?text=${message}`, '_blank');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logoFran} 
              alt="Franciele Souza - Logo" 
              className="h-10 w-10 object-contain"
            />
            <div className="hidden md:block">
              <h3 className="font-bold text-foreground">Franciele Souza</h3>
              <p className="text-xs text-muted-foreground">Fonoaudióloga</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('atendimentos')}
              className="text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
              Atendimentos
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="medical"
              onClick={handleWhatsAppContact}
              className="shadow-soft"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 text-muted-foreground hover:text-primary transition-smooth"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <nav className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-smooth font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-smooth font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('atendimentos')}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-smooth font-medium"
              >
                Atendimentos
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-smooth font-medium"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-smooth font-medium"
              >
                Contato
              </button>
              <div className="px-4 pt-4">
                <Button 
                  variant="medical"
                  onClick={handleWhatsAppContact}
                  className="w-full"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Agendar Consulta
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
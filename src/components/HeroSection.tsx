import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram } from "lucide-react";
import francieleImage from "@/assets/franciele-professional.jpg";

export function HeroSection() {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta para aparelhos auditivos.");
    window.open(`https://wa.me/5551998369201?text=${message}`, '_blank');
  };

  const handleInstagramContact = () => {
    window.open('https://instagram.com/fonofrancielesouza', '_blank');
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pink-soft-gradient pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Franciele Souza
              <span className="block text-primary">Fonoaudiologia Completa para</span>
              <span className="block text-primary">Adultos e Crianças</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Aparelhos Auditivos, Exames e Terapia de Linguagem.
              <br className="hidden md:block" />
              Cuidado completo em um só lugar.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6">
              <Button 
                variant="medical" 
                size="hero"
                onClick={handleWhatsAppContact}
                className="w-full md:w-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contato via WhatsApp
              </Button>
              
              <Button 
                variant="medical" 
                size="hero"
                onClick={handleInstagramContact}
                className="w-full md:w-auto"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Seguir no Instagram
              </Button>
            </div>
          </div>

          {/* Right side - Professional image */}
          <div className="animate-fade-in lg:flex justify-center">
            <div className="relative">
              <img
                src={francieleImage}
                alt="Franciele Souza - Fonoaudióloga"
                className="w-full max-w-md rounded-2xl shadow-soft hover-lift transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
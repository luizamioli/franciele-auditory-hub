import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram } from "lucide-react";
import francieleImage from "@/assets/franciele-professional.jpg";

export function HeroSection() {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta para aparelhos auditivos.");
    window.open(`https://wa.me/555198369201?text=${message}`, '_blank');
  };

  const handleInstagramContact = () => {
    window.open('https://instagram.com/francielesouzafono', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center soft-gradient">
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
            
            <div className="flex flex-col md:flex-row gap-6 mb-12">
              <Button 
                variant="whatsapp" 
                size="hero"
                onClick={handleWhatsAppContact}
                className="w-full md:w-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contato via WhatsApp
              </Button>
              
              <Button 
                variant="instagram" 
                size="hero"
                onClick={handleInstagramContact}
                className="w-full md:w-auto"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Seguir no Instagram
              </Button>
            </div>

            {/* Address */}
            <div className="mt-16">
              <p className="text-lg font-semibold text-foreground mb-4">
                Rua Laurent Filho, 115, Taquari - RS, CEP: 95860-000
              </p>
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

        {/* Map section moved below */}
        <div className="mt-24 flex justify-center">
          <iframe
            src="https://www.google.com/maps?q=Rua+Laurent+Filho,+115,+Taquari,+RS,+95860-000,+Brasil&output=embed"
            width="400"
            height="250"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa da Clínica"
            className="shadow-soft"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
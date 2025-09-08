import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram } from "lucide-react";

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
      <div className="max-w-6xl mx-auto px-6 py-20 text-center animate-fade-in">
      <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
        Franciele Souza
        <span className="block text-pink-500">Fonoaudiologia Completa para</span>
        <span className="block text-pink-500">Adultos e Crianças</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
        Aparelhos Auditivos, Exames e Terapia de Linguagem.
        <br className="hidden md:block" />
        Cuidado completo em um só lugar.
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
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

      {/* Endereço e mapa - movido para o final */}
      <div className="mt-24 flex flex-col items-center">
        <p className="text-lg font-semibold text-foreground mb-4">
        Rua Lauert Filho, 115, Taquari RS, 95860-000, Brasil
        </p>
        <iframe
        src="https://www.google.com/maps?q=Rua+Lauert+Filho,+115,+Taquari,+RS,+95860-000,+Brasil&output=embed"
        width="350"
        height="200"
        style={{ border: 0, borderRadius: '12px' }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa da Clínica"
        ></iframe>
      </div>
      </div>
    </section>
  );
} 
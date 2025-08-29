import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const handleInstagramClick = () => {
    window.open('https://instagram.com/francielesouzafono', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+5551999999999', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:contato@francielesouza.com.br', '_self');
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Franciele Souza</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Fonoaudióloga especialista em aparelhos auditivos, 
              dedicada a transformar vidas através de soluções auditivas personalizadas.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato Rápido</h4>
            <div className="space-y-3">
              <button 
                onClick={handlePhoneClick}
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                <Phone className="w-4 h-4" />
                (51) 99999-9999
              </button>
              <button 
                onClick={handleEmailClick}
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                <Mail className="w-4 h-4" />
                contato@francielesouza.com.br
              </button>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                Av. Praia de Belas, 1212 - Porto Alegre/RS
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
            <button 
              onClick={handleInstagramClick}
              className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-smooth hover:scale-105"
            >
              <Instagram className="w-5 h-5" />
              @francielesouzafono
            </button>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Franciele Souza - Fonoaudióloga. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
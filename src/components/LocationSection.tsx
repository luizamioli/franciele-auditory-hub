import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export function LocationSection() {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta na clínica.");
    window.open(`https://wa.me/5551999999999?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 soft-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Visite Nossa Clínica
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos localizados em um ambiente acolhedor e moderno, 
            preparado especialmente para seu conforto e bem-estar.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-8">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="trust-gradient p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                      <p className="text-muted-foreground">
                        Av. Praia de Belas, 1212 - Sala 405<br />
                        Praia de Belas, Porto Alegre - RS<br />
                        CEP: 90110-000
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="trust-gradient p-3 rounded-full">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Horário de Funcionamento</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Segunda a Sexta: 8h às 18h</p>
                        <p>Sábado: 8h às 12h</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="trust-gradient p-3 rounded-full">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                      <p className="text-muted-foreground">(51) 99999-9999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="trust-gradient p-3 rounded-full">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                      <p className="text-muted-foreground">contato@francielesouza.com.br</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t">
                  <Button 
                    variant="medical" 
                    onClick={handleWhatsAppContact}
                    className="w-full"
                  >
                    Agendar Consulta pelo WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-fade-in">
            <Card className="shadow-soft overflow-hidden h-full">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0985710259547!2d-51.22851858513476!3d-30.03758528187785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979f8c5b8a4e1%3A0x7d4f8e1a2b5c6d8e!2sAv.%20Praia%20de%20Belas%2C%201212%20-%20Praia%20de%20Belas%2C%20Porto%20Alegre%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1635789012345!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Clínica Franciele Souza"
                  className="rounded-lg"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
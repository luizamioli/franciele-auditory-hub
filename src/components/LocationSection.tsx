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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
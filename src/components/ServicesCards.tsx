import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope } from "lucide-react";

const services = [
  {
    title: "Exames Audiológicos",
    description: "Avaliações completas e precisas da sua saúde auditiva com tecnologia de ponta.",
    action: "Agendar Exame"
  },
  {
    title: "Linguagem e Fala",
    description: "Terapia especializada para desenvolvimento e reabilitação da comunicação.",
    action: "Saiba Mais"
  },
  {
    title: "Saúde Ocupacional",
    description: "Programas preventivos e exames empresariais para proteção auditiva no trabalho.",
    action: "Consultar"
  }
];

export function ServicesCards() {
  const handleServiceContact = (service: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre ${service}.`);
    window.open(`https://wa.me/5551998369201?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cuidado completo em fonoaudiologia com atendimento personalizado e tecnologia avançada.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-soft hover:shadow-glow transition-smooth animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-medical-pink/10 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-8 h-8 text-medical-pink" />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                {/* CTA Button */}
                <Button 
                  onClick={() => handleServiceContact(service.title)}
                  className="w-full bg-medical-pink hover:bg-medical-pink/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  {service.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
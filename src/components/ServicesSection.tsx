import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, MessageSquare } from "lucide-react";
import discreteHearingAid from "@/assets/hearing-aid-discrete.jpg";
import rechargeableHearingAid from "@/assets/hearing-aid-rechargeable.jpg";
import bluetoothHearingAid from "@/assets/hearing-aid-bluetooth.jpg";
import invisibleHearingAid from "@/assets/hearing-aid-invisible.jpg";

const products = [
  {
    image: discreteHearingAid,
    title: "Modelo Discreto",
    description: "Tecnologia avançada com design elegante e confortável. Perfeito para quem busca discrição sem abrir mão da qualidade."
  },
  {
    image: rechargeableHearingAid,
    title: "Potência Recarregável",
    description: "Bateria recarregável de longa duração com case prático. Tecnologia e conforto em suas mãos."
  },
  {
    image: bluetoothHearingAid,
    title: "Conectividade Total",
    description: "Conecta diretamente ao seu smartphone via Bluetooth. Tecnologia e conforto para seu dia a dia."
  },
  {
    image: invisibleHearingAid,
    title: "Invisível Completo",
    description: "Tecnologia completamente invisível, moldado especialmente para seu ouvido. Conforto máximo."
  }
];

export function ServicesSection() {
  const handleExamWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar um exame audiológico.");
    window.open(`https://wa.me/5551999999999?text=${message}`, '_blank');
  };

  const handleTherapyWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de falar sobre terapia de linguagem e fala.");
    window.open(`https://wa.me/5551999999999?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossas Especialidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos cuidado completo em fonoaudiologia, com tecnologia avançada 
            e atendimento personalizado para toda a família.
          </p>
        </div>

        {/* Aparelhos Auditivos */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Aparelhos Auditivos</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologia e conforto em aparelhos selecionados especialmente para suas necessidades.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* Exames e Terapia */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Exames Audiológicos */}
          <div className="animate-fade-in">
            <Card className="shadow-soft hover:shadow-glow transition-smooth h-full">
              <CardContent className="p-8">
                <div className="trust-gradient p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Stethoscope className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Exames Audiológicos</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Avaliações precisas para a sua saúde auditiva. Realizamos exames completos 
                  para diagnóstico e acompanhamento com equipamentos de última geração.
                </p>
                <Button 
                  variant="medical" 
                  onClick={handleExamWhatsApp}
                  className="w-full"
                >
                  Agende seu Exame
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Terapia de Linguagem */}
          <div className="animate-fade-in">
            <Card className="shadow-soft hover:shadow-glow transition-smooth h-full">
              <CardContent className="p-8">
                <div className="trust-gradient p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <MessageSquare className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Linguagem e Fala</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Tratamento especializado para adultos e crianças. Ajuda com gagueira, 
                  comunicação, trocas na fala e desenvolvimento infantil.
                </p>
                <Button 
                  variant="medical" 
                  onClick={handleTherapyWhatsApp}
                  className="w-full"
                >
                  Fale sobre sua necessidade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
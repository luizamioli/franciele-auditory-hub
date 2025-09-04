import { ProductCard } from "./ProductCard";
import discreteHearingAid from "@/assets/nexiaaa-5.jpg";
import rechargeableHearingAid from "@/assets/Nexia 1.jpg";
import bluetoothHearingAid from "@/assets/Nexi-3.jpg";
import invisibleHearingAid from "@/assets/Nexia-4.jpg";

const products = [
  {
    image: discreteHearingAid,
    title: "Modelo Discreto",
    description: "Design elegante e quase imperceptível, perfeito para quem busca discrição sem abrir mão da qualidade sonora."
  },
  {
    image: rechargeableHearingAid,
    title: "Potência Recarregável",
    description: "Bateria recarregável de longa duração com case prático. Nunca mais se preocupe com pilhas."
  },
  {
    image: bluetoothHearingAid,
    title: "Conectividade Perfeita",
    description: "Conecta diretamente ao seu smartphone via Bluetooth para ligações e música com qualidade premium."
  },
  {
    image: invisibleHearingAid,
    title: "Invisível Total",
    description: "Tecnologia avançada completamente invisível, moldado especialmente para seu ouvido."
  }
];

export function ProductsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Aparelhos Auditivos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma seleção cuidadosa dos melhores aparelhos auditivos, 
            escolhidos especialmente para atender suas necessidades específicas.
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
    </section>
  );
}
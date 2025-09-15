import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

export function ProductCard({ image, title, description }: ProductCardProps) {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o ${title}. Pode me ajudar?`);
    window.open(`https://wa.me/5551998369201?text=${message}`, '_blank');
  };

  return (
    <Card className="group hover-lift transition-smooth shadow-soft hover:shadow-glow">
      <CardContent className="p-6">
        <div className="aspect-square overflow-hidden rounded-lg mb-4">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{description}</p>
        <Button 
          variant="medical" 
          size="sm"
          onClick={handleWhatsAppContact}
          className="w-full"
        >
          Saiba Mais Detalhes
        </Button>
      </CardContent>
    </Card>
  );
}
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Laura Wolff",
    age: "18 anos, usuária de aparelhos auditivos",
    text: "Franciele foi muito mais do que uma simples fonoaudióloga para mim e minha família. Quando eu tinha 15 anos, em 2021, fui diagnosticada com Susac, uma síndrome rara, e, em busca de vários profissionais para me ajudar a recuperar os movimentos e realizar atividades básicas do dia a dia, encontramos a Fran, que agora consideramos um membro da família, uma amiga de verdade. Ela me ensinou a escutar os sons novamente e a pronunciar de uma maneira mais calma. Logo depois, ensinou minha irmã a conhecer e falar os primeiros fonemas. Continuo me tratando com a Fran até hoje e a recomendo de olhos fechados.",
    rating: 5
  },
  {
    name: "Maria Silva",
    age: "68 anos",
    text: "A Dra. Franciele mudou minha vida! Depois de anos com dificuldades auditivas, hoje posso conversar normalmente com minha família. O atendimento é excepcional!",
    rating: 5
  },
  {
    name: "João Santos",
    age: "72 anos", 
    text: "Profissional muito competente e atenciosa. O aparelho que ela indicou é perfeito para minhas necessidades. Recomendo para todos!",
    rating: 5
  },
  {
    name: "Ana Costa",
    age: "45 anos",
    text: "Excelente acompanhamento desde a primeira consulta. A Dra. Franciele sempre disponível para ajustes e dúvidas. Muito satisfeita!",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O Que Nossos Pacientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A satisfação de nossos pacientes é nossa maior recompensa. 
            Veja alguns depoimentos de quem já transformou sua qualidade de vida conosco.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift transition-smooth shadow-soft hover:shadow-glow animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.age}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
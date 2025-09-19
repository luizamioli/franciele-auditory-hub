import francielePortrait from "@/assets/franciele-portrait.jpg";

export function AboutSection() {
  return (
    <section className="py-20 soft-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Me Conheça: Franciéle Souza
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Tenho mais de 6 anos de experiência na área de aparelhos auditivos e sou pós-graduada em distúrbios da fala e da linguagem. Dedico-me a transformar a qualidade de vida dos meus pacientes através de um atendimento personalizado.
              </p>
              <p>
                Minha abordagem oferece não apenas aparelhos auditivos de última geração, mas também um acompanhamento completo para garantir sua adaptação e satisfação total.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 trust-gradient rounded-2xl transform rotate-3"></div>
              <img 
                src={francielePortrait} 
                alt="Dra. Franciéle Souza - Fonoaudióloga especialista em aparelhos auditivos"
                className="relative w-full rounded-2xl shadow-glow hover-lift transition-smooth"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
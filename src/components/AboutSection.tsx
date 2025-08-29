import francielePortrait from "@/assets/franciele-portrait.jpg";

export function AboutSection() {
  return (
    <section className="py-20 soft-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Conheça a Dra. Franciele Souza
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Com mais de 10 anos de experiência em fonoaudiologia e especialização 
                em aparelhos auditivos, a Dra. Franciele Souza dedica-se a transformar 
                a qualidade de vida de seus pacientes através de soluções auditivas personalizadas.
              </p>
              <p>
                Nossa abordagem é centrada no paciente, oferecendo não apenas aparelhos 
                de última geração, mas também acompanhamento completo para garantir 
                sua adaptação e satisfação total.
              </p>
              <p>
                <span className="text-primary font-semibold">Missão:</span> Proporcionar 
                soluções auditivas que devolvam a conexão com o mundo sonoro, 
                sempre com atendimento humanizado e tecnologia de ponta.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 trust-gradient rounded-2xl transform rotate-3"></div>
              <img 
                src={francielePortrait} 
                alt="Dra. Franciele Souza - Fonoaudióloga especialista em aparelhos auditivos"
                className="relative w-full rounded-2xl shadow-glow hover-lift transition-smooth"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
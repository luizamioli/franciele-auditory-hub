import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

export function VideoSection() {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Olá! Gostaria de conversar com a Franciéle.");
    window.open(`https://wa.me/5551998369201?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 soft-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Me Conheça
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Area */}
          <div className="animate-fade-in">
            <Card className="shadow-soft overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full max-w-md mx-auto" style={{ aspectRatio: '9/16' }}>
                  <div className="w-full h-full bg-muted flex items-center justify-center rounded-lg">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg 
                        className="w-8 h-8 text-primary-foreground" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-muted-foreground">Vídeo em breve</p>
                  </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <div className="space-y-6">
              <div className="bg-card p-8 rounded-lg shadow-soft">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  "Olá! Eu sou a Franciéle Souza, sua fonoaudióloga. Minha missão é 
                  proporcionar a melhor experiência auditiva e de comunicação para 
                  você e sua família."
                </p>
                <Button 
                  variant="medical" 
                  size="lg"
                  onClick={handleWhatsAppContact}
                  className="w-full"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Converse Comigo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
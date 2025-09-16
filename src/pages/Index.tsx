import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesCards } from "@/components/ServicesCards";
import { VideoSection } from "@/components/VideoSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <div id="atendimentos">
        <ServicesCards />
      </div>
      <div id="sobre">
        <VideoSection />
        <AboutSection />
      </div>
      <div id="depoimentos">
        <TestimonialsSection />
      </div>
      <div id="contato">
        <LocationSection />
      </div>
      <Footer />
    </main>
  );
};

export default Index;

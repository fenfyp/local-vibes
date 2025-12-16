import { Hash, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-soft rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Floating hashtags decoration */}
        <div className="absolute -top-10 left-10 opacity-30 animate-float" style={{ animationDelay: '-1s' }}>
          <span className="hashtag-glow text-primary text-2xl font-bold">#tech</span>
        </div>
        <div className="absolute top-20 -right-5 opacity-30 animate-float" style={{ animationDelay: '-2s' }}>
          <span className="hashtag-glow text-primary text-xl font-bold">#musique</span>
        </div>
        <div className="absolute bottom-20 -left-5 opacity-30 animate-float" style={{ animationDelay: '-4s' }}>
          <span className="hashtag-glow text-primary text-lg font-bold">#sport</span>
        </div>

        {/* Main content */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8">
            <span className="w-2 h-2 bg-green-activity rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Communauté active maintenant</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up-delay-1">
          <span className="text-foreground">Connectez-vous avec ceux qui partagent </span>
          <span className="text-gradient">vos passions</span>
          <span className="text-foreground">, près de chez vous</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delay-2">
          Rejoignez des forums locaux par hashtag et ville. Discutez, votez et échangez avec des personnes autour de vous.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up-delay-3">
          <Button variant="hero" size="lg" className="group">
            Rejoindre la communauté
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg">
            Découvrir comment ça marche
          </Button>
        </div>

        {/* Countries badge */}
        <div className="animate-fade-up-delay-3">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-card/50 border border-border backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              France · Belgique · Suisse · Luxembourg
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-xl bg-secondary">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">10K+</p>
            <p className="text-xs text-muted-foreground">Membres actifs</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-xl bg-secondary">
              <Hash className="w-6 h-6 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">500+</p>
            <p className="text-xs text-muted-foreground">Forums actifs</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-xl bg-secondary">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">200+</p>
            <p className="text-xs text-muted-foreground">Villes couvertes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

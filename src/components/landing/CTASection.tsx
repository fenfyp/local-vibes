import { ArrowRight, MapPin, Hash, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-soft rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl border border-border p-8 md:p-16 text-center glow-purple">
          {/* Icons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Hash className="w-6 h-6 text-primary" />
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Votre ville.<br />
            <span className="text-gradient">Vos passions.</span><br />
            Vos conversations.
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Rejoignez des milliers de personnes qui ont déjà trouvé leur communauté locale. C'est gratuit et ça prend moins d'une minute.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="group w-full sm:w-auto">
              Commencer maintenant
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-6 mt-10 text-muted-foreground text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-activity rounded-full" />
              Gratuit
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-activity rounded-full" />
              Sans pub
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-activity rounded-full" />
              Respect de la vie privée
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

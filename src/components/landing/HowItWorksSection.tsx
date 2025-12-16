import { MapPin, Hash, MessageCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Choisissez votre ville",
    description: "Sélectionnez votre localisation parmi les villes de France, Belgique, Suisse ou Luxembourg.",
  },
  {
    number: "02",
    icon: Hash,
    title: "Explorez les hashtags",
    description: "Parcourez les forums par centres d'intérêt : tech, musique, sport, art, cuisine, et bien plus.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Participez aux discussions",
    description: "Créez des posts, votez dans les sondages, et échangez avec votre communauté locale.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Comment ça marche</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Trois étapes pour rejoindre<br />
            <span className="text-gradient">votre communauté</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="relative p-8 rounded-2xl bg-card border border-border card-hover text-center">
                {/* Step number */}
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {step.number}
                </span>
                
                <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

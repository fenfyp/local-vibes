import { GraduationCap, Palette, Code, Rocket, Sparkles } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    label: "Étudiants",
    description: "Trouvez des camarades et partagez vos expériences",
  },
  {
    icon: Palette,
    label: "Créateurs",
    description: "Connectez avec d'autres artistes locaux",
  },
  {
    icon: Code,
    label: "Développeurs",
    description: "Rejoignez la communauté tech de votre ville",
  },
  {
    icon: Rocket,
    label: "Entrepreneurs",
    description: "Réseautez avec d'autres fondateurs",
  },
  {
    icon: Sparkles,
    label: "Curieux",
    description: "Explorez de nouveaux centres d'intérêt",
  },
];

const AudienceSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Pour qui ?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Une communauté pour<br />
            <span className="text-gradient">tous les passionnés</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Que vous soyez étudiant, créateur, développeur ou simplement curieux, trouvez votre tribu locale.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border card-hover text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <audience.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{audience.label}</h3>
              <p className="text-muted-foreground text-sm">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;

import { Globe, Users, MessageCircle } from "lucide-react";

const problems = [
  {
    icon: Globe,
    title: "Les réseaux sociaux sont trop globaux",
    description: "Vos fils d'actualité sont remplis de contenus du monde entier, sans pertinence locale.",
  },
  {
    icon: Users,
    title: "Les forums semblent impersonnels",
    description: "Les grandes communautés en ligne manquent de connexion humaine authentique.",
  },
  {
    icon: MessageCircle,
    title: "Difficile de trouver des gens proches",
    description: "Vous avez des passions, mais personne autour de vous ne les partage.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Le problème</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Internet nous connecte au monde,<br />
            <span className="text-muted-foreground">mais nous éloigne de nos voisins</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

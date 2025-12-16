import { Hash, MapPin, MessageSquare, Sparkles } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">La solution</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Des forums basés sur<br />
            <span className="text-gradient">vos centres d'intérêt + votre ville</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combinez un hashtag avec votre localisation pour rejoindre des conversations qui vous concernent vraiment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Visual representation */}
          <div className="relative">
            <div className="bg-card rounded-3xl border border-border p-8 glow-purple-sm">
              {/* Forum example */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Hash className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground hashtag-glow">#développement</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Lyon
                    </p>
                  </div>
                  <span className="ml-auto px-3 py-1 rounded-full bg-green-activity/20 text-green-activity text-xs font-medium">
                    847 membres
                  </span>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Hash className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground hashtag-glow">#randonnée</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Genève
                    </p>
                  </div>
                  <span className="ml-auto px-3 py-1 rounded-full bg-green-activity/20 text-green-activity text-xs font-medium">
                    423 membres
                  </span>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Hash className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground hashtag-glow">#startups</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Bruxelles
                    </p>
                  </div>
                  <span className="ml-auto px-3 py-1 rounded-full bg-green-activity/20 text-green-activity text-xs font-medium">
                    612 membres
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <Hash className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Forums par hashtag + ville</h3>
                <p className="text-muted-foreground">Chaque forum combine un centre d'intérêt et une localisation pour des échanges pertinents.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Fils d'actualité locaux</h3>
                <p className="text-muted-foreground">Découvrez ce qui se passe près de chez vous, pas à l'autre bout du monde.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Conversations authentiques</h3>
                <p className="text-muted-foreground">Échangez avec des personnes que vous pourriez croiser demain.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Communauté de proximité</h3>
                <p className="text-muted-foreground">Créez des liens réels avec des personnes partageant vos passions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

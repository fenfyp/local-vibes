import { Eye, EyeOff, Shield, Heart } from "lucide-react";

const AnonymousModeSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Mode anonyme</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Exprimez-vous<br />
              <span className="text-gradient">en toute liberté</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Parfois, on veut partager sans se dévoiler. Notre mode anonyme vous permet de poster et répondre sans révéler votre identité.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <EyeOff className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Posts anonymes</h3>
                  <p className="text-muted-foreground text-sm">Publiez sans afficher votre nom ou profil.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Réponses protégées</h3>
                  <p className="text-muted-foreground text-sm">Vos réponses peuvent aussi être anonymes.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Authenticité encouragée</h3>
                  <p className="text-muted-foreground text-sm">L'anonymat favorise des échanges plus honnêtes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-card rounded-3xl border border-border p-8 glow-purple-sm">
              <div className="space-y-4">
                {/* Normal post */}
                <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-purple-soft" />
                    <div>
                      <p className="font-medium text-foreground text-sm flex items-center gap-2">
                        Lucas D.
                        <Eye className="w-3 h-3 text-muted-foreground" />
                      </p>
                      <p className="text-xs text-muted-foreground">#emploi · Lausanne</p>
                    </div>
                  </div>
                  <p className="text-foreground text-sm">Quelqu'un a des retours sur les entretiens chez cette startup ?</p>
                </div>

                {/* Anonymous post */}
                <div className="p-4 rounded-xl bg-secondary/30 border border-primary/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <EyeOff className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm flex items-center gap-2">
                        Anonyme
                        <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs">Mode anonyme</span>
                      </p>
                      <p className="text-xs text-muted-foreground">#emploi · Lausanne</p>
                    </div>
                  </div>
                  <p className="text-foreground text-sm">J'y ai passé un entretien le mois dernier. L'ambiance est top, mais les délais de réponse sont longs. N'hésite pas à relancer !</p>
                </div>

                {/* Toggle hint */}
                <div className="flex items-center justify-center gap-2 pt-4 text-muted-foreground text-sm">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary">
                    <EyeOff className="w-4 h-4" />
                    <span>Activer le mode anonyme</span>
                    <div className="w-8 h-5 rounded-full bg-primary relative">
                      <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnonymousModeSection;

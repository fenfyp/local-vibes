import { FileText, BarChart3, MessageSquare, TrendingUp } from "lucide-react";

const FeedFeaturesSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Le fil d'actualité</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Un contenu local<br />
            <span className="text-gradient">toujours pertinent</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Votre fil est rempli de posts, sondages et discussions de votre communauté locale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Feed mockup */}
          <div className="bg-card rounded-3xl border border-border p-6 space-y-4 glow-purple-sm">
            {/* Post example */}
            <div className="p-4 rounded-xl bg-secondary/30 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/30" />
                <div>
                  <p className="font-medium text-foreground text-sm">Marie L.</p>
                  <p className="text-xs text-muted-foreground">#café · Paris · il y a 2h</p>
                </div>
              </div>
              <p className="text-foreground text-sm mb-3">Quelqu'un connaît un bon café pour travailler dans le 11e ? Avec du bon wifi et pas trop bruyant 🙏</p>
              <div className="flex items-center gap-4 text-muted-foreground text-xs">
                <span className="flex items-center gap-1"><MessageSquare className="w-4 h-4" /> 12 réponses</span>
                <span className="flex items-center gap-1"><TrendingUp className="w-4 h-4 text-green-activity" /> 34 votes</span>
              </div>
            </div>

            {/* Poll example */}
            <div className="p-4 rounded-xl bg-secondary/30 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/30" />
                <div>
                  <p className="font-medium text-foreground text-sm">Thomas K.</p>
                  <p className="text-xs text-muted-foreground">#running · Lyon · il y a 5h</p>
                </div>
                <span className="ml-auto px-2 py-1 rounded-md bg-primary/20 text-primary text-xs font-medium flex items-center gap-1">
                  <BarChart3 className="w-3 h-3" /> Sondage
                </span>
              </div>
              <p className="text-foreground text-sm mb-4">Quelle heure préférez-vous pour les sorties running du dimanche ?</p>
              <div className="space-y-2">
                <div className="relative h-8 rounded-lg bg-secondary overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-3/5 bg-primary/30 rounded-lg" />
                  <span className="absolute inset-0 flex items-center px-3 text-sm text-foreground">8h00 - 62%</span>
                </div>
                <div className="relative h-8 rounded-lg bg-secondary overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-2/5 bg-primary/30 rounded-lg" />
                  <span className="absolute inset-0 flex items-center px-3 text-sm text-foreground">10h00 - 38%</span>
                </div>
              </div>
            </div>

            {/* Discussion example */}
            <div className="p-4 rounded-xl bg-secondary/30 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/30" />
                <div>
                  <p className="font-medium text-foreground text-sm">Sophie M.</p>
                  <p className="text-xs text-muted-foreground">#freelance · Bruxelles · il y a 1j</p>
                </div>
              </div>
              <p className="text-foreground text-sm">Recherche espace de coworking sympa pour freelances tech. Des recommandations ?</p>
            </div>
          </div>

          {/* Features list */}
          <div className="space-y-6">
            <div className="flex gap-4 p-4 rounded-xl bg-card border border-border card-hover">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Posts</h3>
                <p className="text-muted-foreground text-sm">Partagez vos questions, conseils et découvertes avec la communauté.</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-card border border-border card-hover">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Sondages</h3>
                <p className="text-muted-foreground text-sm">Créez des sondages pour prendre des décisions collectives.</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-card border border-border card-hover">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Discussions</h3>
                <p className="text-muted-foreground text-sm">Répondez aux posts et construisez des conversations enrichissantes.</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-card border border-border card-hover">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Pertinence locale</h3>
                <p className="text-muted-foreground text-sm">Le contenu est filtré par votre localisation pour rester pertinent.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedFeaturesSection;

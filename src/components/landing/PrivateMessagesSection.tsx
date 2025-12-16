import { Send, Lock, Users } from "lucide-react";

const PrivateMessagesSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-3xl border border-border p-6 glow-purple-sm">
              <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-purple-soft" />
                <div>
                  <p className="font-medium text-foreground text-sm">Emma R.</p>
                  <p className="text-xs text-green-activity flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-activity" />
                    En ligne
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-2xl rounded-bl-sm bg-secondary text-foreground text-sm">
                    Salut ! J'ai vu ton post sur #photographie à Bordeaux. Tu fais quel type de photos ?
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[80%] p-3 rounded-2xl rounded-br-sm bg-primary text-primary-foreground text-sm">
                    Hey ! Surtout du street et un peu de portrait. Et toi ?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-2xl rounded-bl-sm bg-secondary text-foreground text-sm">
                    Paysages urbains principalement ! On devrait organiser une sortie photo ensemble 📸
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-xl bg-secondary">
                <input 
                  type="text" 
                  placeholder="Écrire un message..." 
                  className="flex-1 bg-transparent text-foreground text-sm placeholder:text-muted-foreground focus:outline-none"
                  readOnly
                />
                <button className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Send className="w-4 h-4 text-primary-foreground" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Messages privés</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Continuez la conversation<br />
              <span className="text-gradient">en privé</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Les meilleures connexions naissent souvent des échanges individuels. Envoyez des messages privés pour approfondir vos discussions.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Messagerie instantanée</h3>
                  <p className="text-muted-foreground text-sm">Échangez en temps réel avec les membres de votre communauté.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Conversations sécurisées</h3>
                  <p className="text-muted-foreground text-sm">Vos échanges restent privés et protégés.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Créez des liens réels</h3>
                  <p className="text-muted-foreground text-sm">Transformez les interactions en ligne en connexions durables.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateMessagesSection;

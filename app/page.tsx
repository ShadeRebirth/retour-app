export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex flex-col justify-center px-6 py-16 max-w-xl mx-auto text-center gap-6">
        <h1 className="font-display text-4xl leading-tight">
          Vos clients ne reviennent pas parce qu&apos;ils oublient.
        </h1>
        <p className="text-ivory/80 text-lg">
          Un client sur trois qui a aimé votre boutique de plantes ne
          repassera jamais commande — non pas parce qu&apos;il est déçu,
          mais parce que personne ne l&apos;a relancé au bon moment.
        </p>
        <a
          href="#commencer"
          className="mt-4 inline-block bg-ochre text-forest font-sans font-semibold text-lg px-8 py-4 rounded-sm w-full sm:w-auto"
        >
          Envoyer mon premier rappel
        </a>
        <p className="text-ivory/50 text-sm">25€/mois. Sans engagement.</p>
      </section>

      {/* Benefits */}
      <section className="px-6 py-16 bg-ivory text-forest">
        <div className="max-w-xl mx-auto grid gap-10">
          <div>
            <h2 className="font-display text-2xl mb-2">
              Le rappel part tout seul
            </h2>
            <p className="text-forest/70">
              Après chaque vente, Retour attend le bon moment — celui où vos
              plantes ont besoin d&apos;un nouvel engrais, d&apos;un nouveau
              pot, d&apos;une nouvelle pousse — puis envoie l&apos;offre de
              retour.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl mb-2">
              Une offre simple, une seule fois
            </h2>
            <p className="text-forest/70">
              Pas de code promo à gérer, pas de campagne à préparer. Une
              offre de retour, à usage unique, qui se déclenche sans vous.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl mb-2">
              Vous voyez ce que ça rapporte
            </h2>
            <p className="text-forest/70">
              Un compteur simple : combien de clients sont revenus, combien
              de chiffre d&apos;affaires les rappels ont généré.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="commencer" className="px-6 py-20 text-center">
        <h2 className="font-display text-3xl mb-4">
          Faites revenir votre prochain client
        </h2>
        <a
          href="#"
          className="inline-block bg-ochre text-forest font-sans font-semibold text-lg px-8 py-4 rounded-sm w-full sm:w-auto max-w-xs"
        >
          Commencer — 25€/mois
        </a>
        <p className="text-ivory/40 text-sm mt-3">
          Paiement bientôt disponible sur cette page.
        </p>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-ivory/40 text-sm border-t border-ivory/10">
        <p>Retour · fait pour les commerces qui vivent de leurs habitués</p>
      </footer>
    </main>
  );
}

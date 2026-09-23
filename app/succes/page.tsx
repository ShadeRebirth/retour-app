export default function Succes() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center gap-4">
      <h1 className="font-display text-3xl">Merci, c&apos;est parti !</h1>
      <p className="text-ivory/80 max-w-sm">
        Votre abonnement est activé. Vous allez recevoir un email de
        confirmation, et Retour commence dès maintenant à veiller sur vos
        clients.
      </p>
      <a href="/" className="text-ochre underline mt-4">
        Retour à l&apos;accueil
      </a>
    </main>
  );
}

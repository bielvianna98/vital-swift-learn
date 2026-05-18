import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Play, PhoneCall, Hand, RotateCcw, HeartPulse, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/pratica")({
  head: () => ({
    meta: [
      { title: "Aula Prática — Pulso" },
      { name: "description", content: "Passo a passo da manobra de desengasgo em bebê." },
    ],
  }),
  component: Pratica,
});

const steps = [
  {
    n: 1,
    icon: Hand,
    title: "Posicione o bebê",
    text: "Em decúbito ventral sobre seu antebraço, com cabeça mais baixa que o tronco. Sustente a mandíbula com firmeza.",
  },
  {
    n: 2,
    icon: HeartPulse,
    title: "5 tapas interescapulares",
    text: "Com a base da mão dominante, aplique 5 tapas firmes entre as escápulas, em direção crânio-caudal.",
  },
  {
    n: 3,
    icon: RotateCcw,
    title: "Vire o bebê",
    text: "Apoie-o em decúbito dorsal sobre o outro antebraço, mantendo a cabeça abaixo do tronco.",
  },
  {
    n: 4,
    icon: HeartPulse,
    title: "5 compressões torácicas",
    text: "Com 2 dedos no terço inferior do esterno (logo abaixo da linha intermamilar), realize 5 compressões firmes.",
  },
  {
    n: 5,
    icon: AlertCircle,
    title: "Reavalie",
    text: "Observe a boca. Se o corpo estranho for visível, retire. Caso contrário, repita o ciclo.",
  },
  {
    n: 6,
    icon: PhoneCall,
    title: "Acione emergência",
    text: "Chame o SAMU (192) imediatamente. Se o bebê perder consciência, inicie RCP pediátrica.",
  },
];

function Pratica() {
  return (
    <AppShell title="Aula Prática" showBack>
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-medical">Passo a passo</p>
        <h2 className="text-2xl font-bold text-primary mt-1">Manobra de desengasgo</h2>
        <p className="text-sm text-muted-foreground mt-2">
          Demonstração sequencial para lactentes &lt; 1 ano.
        </p>
      </div>

      <div className="aspect-video rounded-2xl bg-primary/95 flex items-center justify-center shadow-glow relative overflow-hidden mb-6">
        <div className="absolute inset-0 bg-medical-gradient opacity-40" />
        <button className="relative z-10 flex items-center gap-3 bg-white/95 text-primary px-5 py-3 rounded-full font-semibold shadow-card active:scale-95 transition-transform">
          <Play className="w-5 h-5 fill-current" /> Reproduzir vídeo
        </button>
        <span className="absolute bottom-3 left-4 text-white/80 text-xs">Vídeo demonstrativo · 2:14</span>
      </div>

      <ol className="flex flex-col gap-3">
        {steps.map(({ n, icon: Icon, title, text }) => (
          <li key={n} className="bg-card rounded-2xl border border-border/60 shadow-card p-4 flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-medical-gradient text-white font-bold flex items-center justify-center shadow-soft">
                {n}
              </div>
              {n < steps.length && <div className="flex-1 w-px bg-border mt-2" />}
            </div>
            <div className="flex-1 pb-1">
              <div className="flex items-center gap-2 mb-1">
                <Icon className="w-4 h-4 text-medical" />
                <h3 className="font-bold text-primary">{title}</h3>
              </div>
              <p className="text-sm text-foreground/75 leading-relaxed">{text}</p>
            </div>
          </li>
        ))}
      </ol>

      <Link
        to="/vr"
        className="mt-8 block w-full bg-medical-gradient text-white font-semibold text-center py-4 rounded-2xl shadow-glow active:scale-[0.98] transition-transform"
      >
        Iniciar simulação VR →
      </Link>
    </AppShell>
  );
}

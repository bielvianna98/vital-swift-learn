import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, ClipboardCheck, Glasses, HeartPulse, ChevronRight, BarChart3 } from "lucide-react";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pulso — Medicina em segundos" },
      { name: "description", content: "Revisão rápida de procedimentos médicos: teoria, prática, quiz e simulação VR." },
      { property: "og:title", content: "Pulso — Medicina em segundos" },
      { property: "og:description", content: "App educacional para estudantes de Medicina." },
    ],
  }),
  component: Home,
});

const modules = [
  {
    to: "/teorica",
    title: "Aula teórica",
    desc: "Conteúdo e fundamentos do procedimento",
    Icon: BookOpen,
  },
  {
    to: "/pratica",
    title: "Aula prática",
    desc: "Passo a passo com demonstrações",
    Icon: HeartPulse,
  },
  {
    to: "/quiz",
    title: "Quiz",
    desc: "Teste seus conhecimentos sobre o procedimento",
    Icon: ClipboardCheck,
  },
  {
    to: "/vr",
    title: "Realidade Virtual",
    desc: "Simulação 3D para treinar na prática",
    Icon: Glasses,
  },
] as const;

function Home() {
  return (
    <AppShell>
      <section className="mb-6">
        <div className="rounded-2xl bg-medical-gradient p-5 text-white shadow-glow relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/10" />
          <div className="absolute -right-2 bottom-0 w-16 h-16 rounded-full bg-white/10" />
          <p className="text-xs uppercase tracking-widest opacity-80">Procedimento ativo</p>
          <h2 className="text-xl font-bold mt-1">Manobra de desengasgo em bebê</h2>
          <p className="text-sm opacity-90 mt-1">4 módulos · ~15 min para revisar tudo</p>
        </div>
      </section>

      <div className="flex flex-col gap-3">
        {modules.map(({ to, title, desc, Icon }) => (
          <Link
            key={to}
            to={to}
            className="group bg-card rounded-2xl shadow-card border border-border/60 p-4 flex items-center gap-4 active:scale-[0.98] transition-all hover:border-medical/40 hover:shadow-glow"
          >
            <div className="w-14 h-14 rounded-full bg-medical-soft flex items-center justify-center shrink-0">
              <Icon className="w-7 h-7 text-medical" strokeWidth={2.2} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-primary text-lg leading-tight">{title}</h3>
              <p className="text-sm text-muted-foreground leading-snug mt-0.5">{desc}</p>
            </div>
            <ChevronRight className="w-6 h-6 text-primary/70 group-hover:translate-x-1 transition-transform" />
          </Link>
        ))}
      </div>

      <div className="mt-8 flex items-end justify-end">
        <div className="flex items-end gap-1 h-12 text-medical">
          {[30, 50, 70, 100].map((h, i) => (
            <div
              key={i}
              className="w-2 rounded-sm bg-medical"
              style={{ height: `${h}%`, opacity: 0.4 + i * 0.2 }}
            />
          ))}
          <BarChart3 className="sr-only" />
        </div>
      </div>

      <Link
        to="/sobre"
        className="block mt-6 text-center text-sm text-medical font-medium hover:underline"
      >
        Conheça os diferenciais do Pulso →
      </Link>
    </AppShell>
  );
}

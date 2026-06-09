import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, ClipboardCheck, Glasses, HeartPulse, ChevronRight } from "lucide-react";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MedStep — Medicina em segundos" },
      { name: "description", content: "Revisão rápida de procedimentos médicos: teoria, prática, quiz e simulação VR." },
      { property: "og:title", content: "MedStep — Medicina em segundos" },
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

      

      <Link
        to="/sobre"
        className="block mt-6 text-center text-sm text-medical font-medium hover:underline"
      >
        Conheça os diferenciais do MedStep →
      </Link>
    </AppShell>
  );
}

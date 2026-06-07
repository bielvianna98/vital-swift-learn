import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Zap, ShieldCheck, Eye, GraduationCap, Smartphone, HeartPulse } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — MedStep" },
      { name: "description", content: "Diferenciais da startup MedStep: educação médica acessível e rápida." },
    ],
  }),
  component: Sobre,
});

const diffs = [
  { icon: Zap, title: "Revisão rápida", text: "Conteúdo essencial em segundos para emergências." },
  { icon: ShieldCheck, title: "Apoio em momentos de insegurança", text: "Reforço técnico para internos e recém-formados." },
  { icon: HeartPulse, title: "Simulação prática", text: "Ambiente seguro para repetir procedimentos." },
  { icon: Eye, title: "Aprendizado visual", text: "Ilustrações, vídeos e VR para fixação real." },
  { icon: Smartphone, title: "Plataforma intuitiva", text: "Mobile first, pensado para o plantão." },
  { icon: GraduationCap, title: "Educação acessível", text: "Padronização baseada em diretrizes atuais." },
];

function Sobre() {
  return (
    <AppShell title="Sobre o MedStep" showBack>
      <div className="rounded-3xl bg-medical-gradient text-white p-6 shadow-glow mb-6">
        <p className="text-xs uppercase tracking-widest opacity-80">Startup</p>
        <h2 className="text-3xl font-extrabold mt-1">MedStep</h2>
        <p className="opacity-90 mt-2">
          Medicina em segundos. Suporte técnico de bolso para quem cuida de vidas.
        </p>
      </div>

      <h3 className="text-lg font-bold text-primary mb-3">Nossos diferenciais</h3>
      <div className="grid grid-cols-1 gap-3">
        {diffs.map(({ icon: Icon, title, text }) => (
          <div key={title} className="bg-card rounded-2xl border border-border/60 shadow-card p-4 flex gap-3">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-medical-soft flex items-center justify-center">
              <Icon className="w-5 h-5 text-medical" />
            </div>
            <div>
              <p className="font-bold text-primary">{title}</p>
              <p className="text-sm text-muted-foreground leading-snug">{text}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-center text-muted-foreground mt-8">
        Projeto acadêmico · Disciplina de Tecnologia e Inovação em Medicina
      </p>
    </AppShell>
  );
}

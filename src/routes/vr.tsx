import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Glasses, Sparkles, Cpu, Wifi, Play } from "lucide-react";

export const Route = createFileRoute("/vr")({
  head: () => ({
    meta: [
      { title: "Realidade Virtual — MedStep" },
      { name: "description", content: "Treine a manobra em simulação imersiva 3D." },
    ],
  }),
  component: VR,
});

function VR() {
  return (
    <AppShell title="Realidade Virtual" showBack>
      <div className="relative rounded-3xl overflow-hidden bg-primary p-6 pt-10 pb-8 text-white shadow-glow">
        <div className="absolute inset-0 bg-medical-gradient opacity-90" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.3) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "radial-gradient(circle at center, black 30%, transparent 80%)",
          }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-80">
            <Sparkles className="w-3.5 h-3.5" /> Modo imersivo
          </div>
          <h2 className="text-2xl font-bold mt-2">Simulação VR</h2>
          <p className="text-sm opacity-90 mt-1 max-w-xs">
            Pratique a manobra em um cenário hospitalar 3D, com feedback em tempo real.
          </p>

          <div className="my-8 flex justify-center">
            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-full animate-pulse-ring" />
              <div className="relative w-32 h-32 rounded-full bg-white/15 backdrop-blur border border-white/30 flex items-center justify-center shadow-glow">
                <Glasses className="w-16 h-16 text-white" strokeWidth={1.6} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="bg-white/10 backdrop-blur rounded-xl py-2 px-1">
              <Cpu className="w-4 h-4 mx-auto mb-1" />
              <span className="opacity-90">Engine 3D</span>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl py-2 px-1">
              <Wifi className="w-4 h-4 mx-auto mb-1" />
              <span className="opacity-90">Conectado</span>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl py-2 px-1">
              <Sparkles className="w-4 h-4 mx-auto mb-1" />
              <span className="opacity-90">IA tutor</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="bg-card rounded-2xl border border-border/60 shadow-card p-4">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Cenário</p>
          <p className="font-bold text-primary mt-1">Sala de emergência</p>
        </div>
        <div className="bg-card rounded-2xl border border-border/60 shadow-card p-4">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Duração</p>
          <p className="font-bold text-primary mt-1">~ 6 min</p>
        </div>
        <div className="bg-card rounded-2xl border border-border/60 shadow-card p-4">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Paciente</p>
          <p className="font-bold text-primary mt-1">Lactente 8m</p>
        </div>
        <div className="bg-card rounded-2xl border border-border/60 shadow-card p-4">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Dificuldade</p>
          <p className="font-bold text-primary mt-1">Intermediária</p>
        </div>
      </div>

      <button className="mt-8 w-full bg-primary text-white font-semibold py-4 rounded-2xl shadow-glow flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
        <Play className="w-5 h-5 fill-current" /> Iniciar simulação VR
      </button>
      <p className="text-center text-xs text-muted-foreground mt-3">
        Compatível com Meta Quest, Pico e WebXR.
      </p>
    </AppShell>
  );
}

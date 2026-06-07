import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { AlertTriangle, Baby, BookOpen, ShieldCheck, Stethoscope, Activity } from "lucide-react";

export const Route = createFileRoute("/teorica")({
  head: () => ({
    meta: [
      { title: "Aula Teórica — MedStep" },
      { name: "description", content: "Fundamentos da manobra de desengasgo em bebê." },
    ],
  }),
  component: Teorica,
});

function Card({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card rounded-2xl shadow-card border border-border/60 p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-medical-soft flex items-center justify-center">
          <Icon className="w-5 h-5 text-medical" />
        </div>
        <h3 className="font-bold text-primary">{title}</h3>
      </div>
      <div className="text-sm text-foreground/80 leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

function Teorica() {
  return (
    <AppShell title="Aula Teórica" showBack>
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-medical">Procedimento</p>
        <h2 className="text-2xl font-bold text-primary mt-1">Manobra de desengasgo em bebê</h2>
        <p className="text-sm text-muted-foreground mt-2">
          Conheça os fundamentos teóricos, sinais clínicos e cuidados essenciais antes de praticar.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Card icon={BookOpen} title="O que é">
          <p>
            Conjunto de manobras de desobstrução de vias aéreas indicadas para lactentes (menores de
            1 ano) com obstrução por corpo estranho. Combina <strong>tapas interescapulares</strong> e
            <strong> compressões torácicas</strong>.
          </p>
        </Card>

        <Card icon={AlertTriangle} title="Quando utilizar">
          <ul className="list-disc pl-5 space-y-1">
            <li>Bebê consciente com obstrução grave (não chora, não tosse efetivamente).</li>
            <li>Cianose súbita ou esforço respiratório intenso.</li>
            <li>Engasgo presenciado durante alimentação ou brincadeira.</li>
          </ul>
        </Card>

        <Card icon={Activity} title="Sinais de engasgo">
          <ul className="list-disc pl-5 space-y-1">
            <li>Incapacidade de chorar ou emitir sons.</li>
            <li>Tosse fraca ou ausente.</li>
            <li>Cianose perioral (lábios azulados).</li>
            <li>Agitação seguida de hipotonia.</li>
          </ul>
        </Card>

        <Card icon={Baby} title="Anatomia relevante">
          <p>
            A via aérea do lactente é estreita e flexível. A epiglote é proporcionalmente maior e a
            traqueia mais curta — pequenos objetos obstruem rapidamente. Sustentar sempre cabeça e
            mandíbula durante a manobra.
          </p>
        </Card>

        <Card icon={ShieldCheck} title="Cuidados importantes">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Nunca</strong> realizar varredura digital às cegas.</li>
            <li>Não usar manobra de Heimlich em menores de 1 ano.</li>
            <li>Acionar emergência (SAMU 192) imediatamente.</li>
            <li>Se o bebê perder a consciência: iniciar RCP.</li>
          </ul>
        </Card>

        <Card icon={Stethoscope} title="Conduta resumida">
          <p>
            Avalie consciência → posicione decúbito ventral → <strong>5 tapas</strong> interescapulares
            → vire em decúbito dorsal → <strong>5 compressões</strong> torácicas → reavalie. Repetir
            até desobstrução ou perda de consciência.
          </p>
        </Card>
      </div>

      <Link
        to="/pratica"
        className="mt-8 block w-full bg-medical-gradient text-white font-semibold text-center py-4 rounded-2xl shadow-glow active:scale-[0.98] transition-transform"
      >
        Ver passo a passo prático →
      </Link>
    </AppShell>
  );
}

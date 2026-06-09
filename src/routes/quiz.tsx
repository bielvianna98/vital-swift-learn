import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { useState } from "react";
import { Check, X, Trophy, RotateCcw, ChevronRight, Construction } from "lucide-react";
import { procedimentos } from "@/lib/procedimentos";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Quiz — MedStep" },
      { name: "description", content: "Teste seus conhecimentos sobre procedimentos médicos." },
    ],
  }),
  component: Quiz,
});

const questions = [
  {
    q: "Quantos tapas interescapulares devem ser realizados por ciclo?",
    options: ["3 tapas", "5 tapas", "10 tapas", "Até a desobstrução"],
    correct: 1,
  },
  {
    q: "Qual é a posição correta do bebê para os tapas?",
    options: [
      "Decúbito dorsal, cabeça elevada",
      "Sentado no colo",
      "Decúbito ventral, cabeça mais baixa que o tronco",
      "Em pé, apoiado no peito",
    ],
    correct: 2,
  },
  {
    q: "Onde realizar as compressões torácicas no lactente?",
    options: [
      "Centro do esterno com a palma",
      "Terço inferior do esterno com 2 dedos",
      "Abdome, abaixo do umbigo",
      "Região interescapular",
    ],
    correct: 1,
  },
  {
    q: "Manobra de Heimlich pode ser usada em bebês menores de 1 ano?",
    options: ["Sim, sempre", "Sim, só com força reduzida", "Não", "Apenas se inconsciente"],
    correct: 2,
  },
  {
    q: "Quando acionar o SAMU (192)?",
    options: [
      "Apenas se o bebê perder consciência",
      "Após 10 minutos sem sucesso",
      "Imediatamente, ao identificar obstrução grave",
      "Somente em ambiente hospitalar",
    ],
    correct: 2,
  },
];

function Quiz() {
  const [slugSelecionado, setSlugSelecionado] = useState<string | null>(null);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = questions[idx];
  const progress = ((idx + (selected !== null ? 1 : 0)) / questions.length) * 100;

  const pick = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === current.correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (idx + 1 >= questions.length) {
      setDone(true);
    } else {
      setIdx(idx + 1);
      setSelected(null);
    }
  };

  const reset = () => {
    setSlugSelecionado(null);
    setIdx(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  };

  // Tela de seleção de procedimento
  if (!slugSelecionado) {
    return (
      <AppShell title="Quiz" showBack>
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-medical">Quiz</p>
          <h2 className="text-2xl font-bold text-primary mt-1 leading-tight">
            Selecione um procedimento
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Escolha o procedimento que deseja testar seus conhecimentos.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {procedimentos.map(({ slug, nome, descricao, icon: Icon, disponivel }) => (
            <button
              key={slug}
              onClick={() => disponivel && setSlugSelecionado(slug)}
              className={`group bg-card rounded-2xl shadow-card border border-border/60 p-4 flex items-center gap-4 text-left transition-all
                ${disponivel
                  ? "active:scale-[0.98] hover:border-medical/40 hover:shadow-glow cursor-pointer"
                  : "opacity-60 cursor-not-allowed"
                }`}
            >
              <div className="w-12 h-12 rounded-full bg-medical-soft flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-medical" strokeWidth={2.2} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-primary leading-tight truncate">{nome}</h3>
                  {disponivel ? (
                    <span className="text-[10px] font-semibold uppercase tracking-wide bg-medical-soft text-medical px-1.5 py-0.5 rounded">
                      Disponível
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold uppercase tracking-wide bg-muted text-muted-foreground px-1.5 py-0.5 rounded flex items-center gap-1">
                      <Construction className="w-3 h-3" /> Em breve
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground leading-snug mt-0.5 line-clamp-2">
                  {descricao}
                </p>
              </div>
              {disponivel && (
                <ChevronRight className="w-5 h-5 text-primary/70 group-hover:translate-x-1 transition-transform shrink-0" />
              )}
            </button>
          ))}
        </div>
      </AppShell>
    );
  }

  // Tela de resultado
  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <AppShell title="Quiz" showBack>
        <div className="bg-card rounded-3xl shadow-glow p-8 text-center mt-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-medical-gradient flex items-center justify-center shadow-glow mb-4">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-primary">Quiz concluído!</h2>
          <p className="text-muted-foreground mt-1">Você acertou</p>
          <p className="text-5xl font-extrabold text-gradient-medical my-3">
            {score}/{questions.length}
          </p>
          <p className="text-sm text-muted-foreground">{pct}% de acertos</p>

          <div className="mt-8 flex flex-col gap-3">
            <button
              onClick={reset}
              className="w-full bg-medical-gradient text-white font-semibold py-3 rounded-2xl shadow-card flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
            >
              <RotateCcw className="w-4 h-4" /> Escolher outro procedimento
            </button>
            <Link
              to="/"
              className="w-full border border-border text-primary font-semibold py-3 rounded-2xl hover:bg-muted transition-colors text-center"
            >
              Voltar ao início
            </Link>
          </div>
        </div>
      </AppShell>
    );
  }

  // Tela das perguntas
  return (
    <AppShell title="Quiz" showBack>
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground mb-2">
          <span>Pergunta {idx + 1} de {questions.length}</span>
          <span>{score} acertos</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-medical-gradient transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="bg-card rounded-2xl shadow-card border border-border/60 p-5 mb-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-medical mb-2">Pergunta</p>
        <h3 className="text-lg font-bold text-primary leading-snug">{current.q}</h3>
      </div>

      <div className="flex flex-col gap-2.5">
        {current.options.map((opt, i) => {
          const isPicked = selected === i;
          const isCorrect = i === current.correct;
          const showResult = selected !== null;
          let style = "border-border bg-card hover:border-medical/50";
          if (showResult && isCorrect) style = "border-success bg-success/10";
          else if (showResult && isPicked && !isCorrect) style = "border-destructive bg-destructive/10";
          else if (showResult) style = "border-border bg-card opacity-60";

          return (
            <button
              key={i}
              onClick={() => pick(i)}
              disabled={selected !== null}
              className={`text-left p-4 rounded-2xl border-2 font-medium transition-all flex items-center justify-between gap-3 ${style}`}
            >
              <span className="text-foreground">{opt}</span>
              {showResult && isCorrect && <Check className="w-5 h-5 text-success shrink-0" />}
              {showResult && isPicked && !isCorrect && <X className="w-5 h-5 text-destructive shrink-0" />}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <button
          onClick={next}
          className="mt-6 w-full bg-medical-gradient text-white font-semibold py-4 rounded-2xl shadow-glow active:scale-[0.98] transition-transform"
        >
          {idx + 1 >= questions.length ? "Ver resultado" : "Próxima pergunta"}
        </button>
      )}
    </AppShell>
  );
}

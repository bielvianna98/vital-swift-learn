import { useRouter } from "@tanstack/react-router";
import { Construction, type LucideIcon } from "lucide-react";

interface Props {
  nome: string;
  Icon: LucideIcon;
}

export function ProcedimentoEmDesenvolvimento({ nome, Icon }: Props) {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center text-center py-10">
      <div className="w-24 h-24 rounded-full bg-medical-soft flex items-center justify-center mb-6 shadow-soft">
        <Icon className="w-12 h-12 text-medical" strokeWidth={2} />
      </div>
      <h2 className="text-2xl font-bold text-primary leading-tight">{nome}</h2>
      <div className="mt-6 flex items-center gap-2 bg-medical-soft text-medical px-4 py-2 rounded-full text-sm font-semibold">
        <Construction className="w-4 h-4" />
        Conteúdo em desenvolvimento
      </div>
      <p className="text-sm text-muted-foreground mt-4 max-w-xs">
        Este procedimento estará disponível em breve. Estamos preparando um conteúdo
        completo e revisado por especialistas.
      </p>
      <button
        onClick={() => router.history.back()}
        className="mt-8 w-full max-w-xs bg-medical-gradient text-white font-semibold text-center py-3.5 rounded-2xl shadow-glow active:scale-[0.98] transition-transform"
      >
        Voltar
      </button>
    </div>
  );
}

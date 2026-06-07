import { Link } from "@tanstack/react-router";
import { ChevronRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { procedimentos } from "@/lib/procedimentos";

interface Props {
  tipo: "teorica" | "pratica";
}

export function ProcedimentosList({ tipo }: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return procedimentos;
    return procedimentos.filter(
      (p) =>
        p.nome.toLowerCase().includes(q) ||
        p.descricao.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div>
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-medical">
          Categoria
        </p>
        <h2 className="text-2xl font-bold text-primary mt-1 leading-tight">
          Procedimentos Básicos em Saúde
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Procedimentos disponíveis:{" "}
          <span className="font-semibold text-medical">{procedimentos.length}</span>
        </p>
      </div>

      <div className="relative mb-5">
        <Search className="w-5 h-5 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquisar procedimento..."
          className="w-full pl-12 pr-4 py-3 rounded-2xl bg-card border border-border/60 shadow-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-medical/50 focus:ring-2 focus:ring-medical/20 transition"
        />
      </div>

      <div className="flex flex-col gap-3">
        {filtered.map(({ slug, nome, descricao, icon: Icon, disponivel }) => (
          <Link
            key={slug}
            to={tipo === "teorica" ? "/teorica/$slug" : "/pratica/$slug"}
            params={{ slug }}
            className="group bg-card rounded-2xl shadow-card border border-border/60 p-4 flex items-center gap-4 active:scale-[0.98] transition-all hover:border-medical/40 hover:shadow-glow"
          >
            <div className="w-12 h-12 rounded-full bg-medical-soft flex items-center justify-center shrink-0">
              <Icon className="w-6 h-6 text-medical" strokeWidth={2.2} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-primary leading-tight truncate">
                  {nome}
                </h3>
                {disponivel && (
                  <span className="text-[10px] font-semibold uppercase tracking-wide bg-medical-soft text-medical px-1.5 py-0.5 rounded">
                    Disponível
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground leading-snug mt-0.5 line-clamp-2">
                {descricao}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-primary/70 group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>
        ))}

        {filtered.length === 0 && (
          <div className="text-center text-sm text-muted-foreground py-10">
            Nenhum procedimento encontrado.
          </div>
        )}
      </div>
    </div>
  );
}

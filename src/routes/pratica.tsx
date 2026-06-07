import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { ProcedimentosList } from "@/components/ProcedimentosList";

export const Route = createFileRoute("/pratica")({
  head: () => ({
    meta: [
      { title: "Procedimentos Práticos — MedStep" },
      {
        name: "description",
        content: "Selecione um procedimento para acessar a aula prática.",
      },
    ],
  }),
  component: PraticaIndex,
});

function PraticaIndex() {
  return (
    <AppShell title="Procedimentos Práticos" showBack>
      <ProcedimentosList tipo="pratica" />
    </AppShell>
  );
}

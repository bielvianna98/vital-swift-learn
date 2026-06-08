import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { ProcedimentosList } from "@/components/ProcedimentosList";

export const Route = createFileRoute("/teorica/")({
  head: () => ({
    meta: [
      { title: "Procedimentos Teóricos — MedStep" },
      {
        name: "description",
        content: "Selecione um procedimento para acessar a aula teórica.",
      },
    ],
  }),
  component: TeoricaIndex,
});

function TeoricaIndex() {
  return (
    <AppShell title="Procedimentos Teóricos" showBack>
      <ProcedimentosList tipo="teorica" />
    </AppShell>
  );
}

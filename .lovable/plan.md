## Plano

### 1. Remover "Procedimento ativo" da tela inicial
- Arquivo: `src/routes/index.tsx`
- Remover o texto "Procedimento ativo" do card de destaque da home, mantendo o restante do card (nome do procedimento, módulos, etc.).

### 2. Renomear o app de "Pulso" para "MedStep"
Atualizar todas as ocorrências do nome em:
- `src/routes/index.tsx` — título da página, meta tags e CTA
- `src/routes/__root.tsx` — título e meta tags globais
- `src/components/AppShell.tsx` — nome no menu lateral, rodapé e link "Sobre"
- `src/routes/sobre.tsx` — título, meta descrição e texto exibido
- `src/routes/teorica.tsx`, `pratica.tsx`, `quiz.tsx`, `vr.tsx` — sufixo do título da aba

Nenhuma alteração de estrutura, lógica ou backend será feita.
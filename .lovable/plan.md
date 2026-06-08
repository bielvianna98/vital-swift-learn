## Problema

Quando o usuário clica em "Desengasgo em Bebês" na lista de procedimentos, a URL muda para `/teorica/desengasgo-bebes` (ou `/pratica/desengasgo-bebes`), mas o conteúdo não aparece — a tela continua mostrando a lista de procedimentos.

Causa: `src/routes/teorica.tsx` e `src/routes/pratica.tsx` viraram **rotas pai** (têm filhos `$slug`), mas o componente deles renderiza `<ProcedimentosList />` em vez de `<Outlet />`. No TanStack Router, quando uma rota pai tem filhos, o componente do pai **precisa** renderizar `<Outlet />`, senão o filho casa mas não aparece na tela.

## Solução

Transformar `teorica.tsx` e `pratica.tsx` em layouts puros (`<Outlet />`) e mover a lista de procedimentos para arquivos `index` irmãos.

### Arquivos

1. **`src/routes/teorica.tsx`** — substituir conteúdo por layout mínimo:
   - Componente retorna apenas `<Outlet />`.
   - Remover `head()` (será definido no index e no $slug).

2. **`src/routes/teorica.index.tsx`** *(novo)* — recebe o conteúdo atual de `teorica.tsx`:
   - `createFileRoute("/teorica/")`
   - `head()` com título "Procedimentos Teóricos — MedStep"
   - Renderiza `<AppShell title="Procedimentos Teóricos" showBack><ProcedimentosList tipo="teorica" /></AppShell>`

3. **`src/routes/pratica.tsx`** — substituir conteúdo por layout mínimo:
   - Componente retorna apenas `<Outlet />`.

4. **`src/routes/pratica.index.tsx`** *(novo)* — recebe o conteúdo atual de `pratica.tsx`:
   - `createFileRoute("/pratica/")`
   - `head()` com título "Procedimentos Práticos — MedStep"
   - Renderiza `<AppShell title="Procedimentos Práticos" showBack><ProcedimentosList tipo="pratica" /></AppShell>`

O `routeTree.gen.ts` é regenerado automaticamente pelo plugin do TanStack — sem edição manual.

## Resultado

- `/teorica` → mostra a lista de procedimentos (como hoje).
- `/teorica/desengasgo-bebes` → abre a aula teórica completa de desengasgo em bebês.
- `/pratica` → lista de procedimentos.
- `/pratica/desengasgo-bebes` → abre o passo a passo prático.
- Demais slugs continuam mostrando "Conteúdo em desenvolvimento".

## Problema
Na tela inicial (`/`) ainda existe um banner fixo no topo com o texto:

- "Manobra de desengasgo em bebê"
- "4 módulos · ~15 min para revisar tudo"

O usuário informou que esse conteúdo não deve aparecer desde o início. A home deve ser neutra, sem um procedimento pré-selecionado.

## Solução
Remover o banner de procedimento ativo da tela inicial em `src/routes/index.tsx` (linhas 47-54). Ajustar o espaçamento da seção seguinte (os 4 cards de módulos) para que o layout continue equilibrado sem o banner.

## Escopo
- Apenas `src/routes/index.tsx`
- Sem alterações em outras rotas ou componentes
- Sem alterações de estrutura ou lógica de navegação

## Resultado esperado
Tela inicial limpa, mostrando diretamente os 4 cards de módulos (Aula teórica, Aula prática, Quiz, Realidade Virtual) sem o banner de procedimento pré-selecionado.
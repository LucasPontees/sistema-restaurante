module.exports = {
    types: [
      { value: '✨ feat', name: '✨ feat:      Uma nova funcionalidade no sistema' },
      { value: '🐛 fix', name: '🐛 fix:       Correção de bugs' },
      { value: '📚 docs', name: '📚 docs:      Mudanças na documentação' },
      { value: '🎨 style', name: '🎨 style:     Mudanças que não afetam o significado do código (espaços em branco, formatação, ponto e vírgula ausente, etc)' },
      { value: '♻️ refactor', name: '♻️ refactor:  Refatoração do código de produção' },
      { value: '⚙️ chore', name: '⚙️ chore:     Tarefas de construção, ferramentas e bibliotecas auxiliares, como geração de documentação' },
      { value: '🔥 remove', name: '🔥 remove:    Remoção de código ou arquivos' },
    ],
    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
  };
  
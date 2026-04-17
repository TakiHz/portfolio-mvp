const projetos = [
  {
    id: 1,
    titulo: 'Atividade 1 JavaScript',
    descricao: 'Primeira atividade prática: manipulação de DOM, eventos e lógica de programação.',
    repositorio: 'https://github.com/TakiHz/Atividade-1-JavaScript'
  },
  {
    id: 2,
    titulo: 'Atividade 2 JavaScript',
    descricao: 'Segunda atividade: funções assíncronas, consumo de API e tratamento de dados.',
    repositorio: 'https://github.com/TakiHz/Atividade-2-JavaScript'
  }
];

function renderizarProjetos() {
  const container = document.getElementById('projetos-container');
  if (!container) return;
  container.innerHTML = '';

  projetos.forEach(projeto => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <div class="links-projeto">
        <a href="${projeto.repositorio}" target="_blank">
          <i class="fab fa-github"></i> Ver no GitHub
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderizarProjetos);

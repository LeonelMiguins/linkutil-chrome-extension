async function loadCategory(category) {
    const res = await fetch('https://raw.githubusercontent.com/LeonelMiguins/linkutil/refs/heads/main/json/links.json');
    const data = await res.json();
    const list = data[category] || [];
  
    const container = document.getElementById('tool-list');
    container.innerHTML = '';
  
    list.forEach(item => {
      container.innerHTML += `
        <li class="tool-item">
          <img src="${item.icone}" alt="${item.nome} Icon">
          <a href="${item.link}" target="_blank">${item.nome}</a>
          <p>${item.descricao}</p>
        </li>
      `;
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnIa').addEventListener('click', () => loadCategory('ia'));
    document.getElementById('btnTorrent').addEventListener('click', () => loadCategory('torrent'));
    document.getElementById('btnUtil').addEventListener('click', () => loadCategory('util'));
    document.getElementById('btnEntret').addEventListener('click', () => loadCategory('Entretenimento'));
  
    loadCategory('ia'); // Carrega a categoria padrão
  });
  
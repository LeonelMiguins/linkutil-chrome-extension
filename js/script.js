async function loadCategory(category) {
    const res = await fetch('https://raw.githubusercontent.com/LeonelMiguins/linkutil-chrome-extension/refs/heads/main/json/links.json');
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
    document.getElementById('btnIas').addEventListener('click', () => loadCategory('ias'));
    document.getElementById('btnDownloads').addEventListener('click', () => loadCategory('download'));
    document.getElementById('btnUtil').addEventListener('click', () => loadCategory('utilitarios'));
    document.getElementById('btnEntret').addEventListener('click', () => loadCategory('entretenimento'));
    document.getElementById('btnAudio').addEventListener('click', () => loadCategory('audio'));
  
    loadCategory('ias'); // Carrega a categoria padrão
  });
  
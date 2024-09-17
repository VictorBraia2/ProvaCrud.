const API_URL = 'http://localhost:3000/imoveis';
document.addEventListener('DOMContentLoaded', () => {
  const createImovelForm = document.getElementById('createImovelForm');
  const imoveisList = document.getElementById('imoveisList');
  loadImoveis();
  createImovelForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const descricao = document.getElementById('descricao').value;
    const dataCompra = document.getElementById('dataCompra').value;
    const endereco = document.getElementById('endereco').value;
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ descricao, dataCompra, endereco })
    });
    loadImoveis();  
  });
  async function loadImoveis() {
    const response = await fetch(API_URL);
    const imoveis = await response.json();
    imoveisList.innerHTML = '';
    imoveis.forEach(imovel => {
      const li = document.createElement('li');
      li.textContent = `${imovel.descricao} - ${imovel.endereco}`;
      imoveisList.appendChild(li);
    });
  }
})
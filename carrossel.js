let index = 0; // Índice da imagem atual
const items = document.querySelectorAll('.carrossel-container'); // Seleciona todos os itens do carrossel
const totalItems = items.length; // Total de imagens no carrossel

let index1 = 0;
const items1 = document.querySelectorAll('.carrossel2-container-all');
const totalItems1 = items1.length; 


// Função para mudar a imagem
function mudarImagem(direcao) {
  // Atualiza o índice com base na direção
  index = (index + direcao + totalItems) % totalItems; // Garante que o índice não saia do intervalo

  // Move o carrossel para a posição da imagem desejada
  const container = document.querySelector('.carrossel');
  container.style.transform = `translateX(-${index * 40}%)`;

}

function mudarImagem1(direcao) {

  index1 = (index1 + direcao + totalItems1) % totalItems1;

  const container = document.querySelector('.carrossel2-container');
  container.style.transform = `translateX(-${index1 * 30}%)`;
}

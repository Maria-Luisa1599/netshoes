let index = 0; // Índice da imagem atual
const items = document.querySelectorAll('.carrossel-container'); // Seleciona todos os itens do carrossel
const totalItems = items.length; // Total de imagens no carrossel


// Função para mudar a imagem
function mudarImagem(direcao) {
  // Atualiza o índice com base na direção
  index = (index + direcao + totalItems) % totalItems; // Garante que o índice não saia do intervalo

  // Move o carrossel para a posição da imagem desejada
  const container = document.querySelector('.carrossel');
  container.style.transform = `translateX(-${index * 10}%)`;


}